import { useState, useCallback, useMemo } from "react";
import { nearest, differenceHyab } from "culori";
import "./App.css";
import colors from "./assets/colors.json";

// interface Color {
//   id: string | number;
//   key?: string;
//   value: string;
//   name: string;
//   brand?: string;
//   type?: string | string[];
//   finish?: string;
// }

const finishMap = {
  G: "GLOSS",
  SG: "SEMI-GLOSS",
  F: "FLAT",
  M: "METALLIC",
  PA: "PEARL",
};

function App() {
  const [showAcrylic, setShowAcrylic] = useState(true);
  const [showLacquer, setShowLacquer] = useState(true);

  const [colorVal, setColorVal] = useState<string>("");

  const onColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const newColor = e.currentTarget.value;
      setColorVal(newColor);
    },
    [setColorVal]
  );

  const matches = useMemo<(typeof colors)[0][]>(() => {
    const filteredColors = colors.filter((c) => (
      (typeof c.type === 'string' && c.type.toLowerCase() === 'acrylic' && showAcrylic) ||
      ((typeof c.type !== 'string' || c.type.toLowerCase() !== 'acrylic') && showLacquer)
    ));
    if (/#[A-Fa-f0-9]{6}/.test(colorVal)) {
      const diff = nearest(filteredColors, differenceHyab(), (a) => a.value);
      return diff(colorVal, 10);
    } else {
      return filteredColors;
    }
  }, [colorVal, showAcrylic, showLacquer]);

  return (
    <div className="container">
      <div className="controls">
        <input value={colorVal} onChange={onColorChange}></input>
        <input type="color" value={colorVal} onChange={onColorChange}></input>
      <div className="filter-group">
        <label htmlFor="acrylic">Acrylic</label><input id="acrylic" type="checkbox" checked={showAcrylic} onChange={() => setShowAcrylic((v) => !v)}></input>
        <label htmlFor="lacquer">Lacquer</label><input id="lacquer" type="checkbox" checked={showLacquer} onChange={() => setShowLacquer((v) => !v)}></input>
      </div>

      </div>
      <div className="color-list">
        {matches.map((match) => (
          <li key={`match-${match.key ?? "def"}-${match.id}`} className="wrapper">
            <div className="key">{match.key ?? ""}</div>
            <div className={`id${match.brand ? ` brand-${match.brand.toLowerCase()}` : ''}`}>{match.id}</div>
            <div className="finish">
              {finishMap[match.finish as keyof typeof finishMap] ?? match.finish ?? match.type}
            </div>
            <div className="name">{match.name}</div>
            <div className="swatch" style={{ background: match.value }}>
              <span className="brand">{match.brand ?? ""} </span>
              <span>{match.value}</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
