import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/resourcesSlice/resourcesSlice";

const Tile = ({ crop }) => {
  const [level, setLevel] = useState(0);
  const dispatch = useDispatch();
  const { cereal, wood, stone, iron } = useSelector((state) => state.resources);
  const [cost, setCost] = useState({});
  const [background, setBackground] = useState({ backgroundColor: null });

  useEffect(() => {
    switch (crop) {
      case "cereal":
        setBackground({ backgroundColor: "#F8D49D" });
        setCost({
          cereal: Math.round((1 + level) * 11 *((1 + level)*1.1)),
          wood: Math.round((1 + level) * 9 *((1 + level)*1.1)),
          stone: Math.round((1 + level) * 7 *((1 + level)*1.1)),
          iron: Math.round((1 + level) * 12 *((1 + level)*1.1)),
        });
        break;
      case "wood":
        setBackground({ backgroundColor: "#8B5A2B", color: "white" });
        setCost({
          cereal: Math.round((1 + level) * 13 *((1 + level)*1.1)),
          wood: Math.round((1 + level) * 6 *((1 + level)*1.1)),
          stone: Math.round((1 + level) * 10 *((1 + level)*1.1)),
          iron: Math.round((1 + level) * 12 *((1 + level)*1.1)),
        });
        break;
      case "stone":
        setBackground({ backgroundColor: "#A9A9A9" });
        setCost({
          cereal: Math.round((1 + level) * 10 *((1 + level)*1.1)),
          wood: Math.round((1 + level) * 13 *((1 + level)*1.1)),
          stone: Math.round((1 + level) * 5 *((1 + level)*1.1)),
          iron: Math.round((1 + level) * 9 *((1 + level)*1.1)),
        });
        break;
      case "iron":
        setBackground({ backgroundColor: "#43464B", color: "white" });
        setCost({
          cereal: Math.round((1 + level) * 17 *((1 + level)*1.1)),
          wood: Math.round((1 + level) * 9 *((1 + level)*1.1)),
          stone: Math.round((1 + level) * 9 *((1 + level)*1.1)),
          iron: Math.round((1 + level) * 6 *((1 + level)*1.1)),
        });
        break;
      default:
        setBackground({ backgroundColor: "lightgray" });
        break;
    }
  }, [crop,level]);

  const handleUpgrade = () => {
    if (
      cost.cereal <= cereal &&
      cost.wood <= wood &&
      cost.stone <= stone &&
      cost.iron <= iron
    ) {
      setLevel((l) => l + 1);
      dispatch(decrement({cost}));
    }
  };

  const handleDispatch = () => {
    dispatch(increment({ crop: `${crop}`, amount: 1 }));
  };

  useEffect(() => {
    let interval = setInterval(handleDispatch, 10000 - 1000 * level);
    return () => clearInterval(interval);
  }, [dispatch, level]);

  return (
    <div className="tile" style={background}>
      <div>level: {level}</div>
      <button
        disabled={
          cost.cereal >= cereal ||
          cost.wood >= wood ||
          cost.stone >= stone ||
          cost.iron >= iron
        }
        onClick={handleUpgrade}
      >
        To: Level {level + 1}
      </button>
      <div>
        production: {Math.round(3600 / ((10000 - 1000 * level) / 1000))}/h
      </div>
      <div>
        <div>to next level:</div>
        <div>cereal: {cost.cereal}</div>
        <div>wood: {cost.wood}</div>
        <div>stone: {cost.stone}</div>
        <div>iron: {cost.iron}</div>
      </div>
    </div>
  );
};

export default Tile;
