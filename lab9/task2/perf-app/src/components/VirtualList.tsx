import { useState, useMemo, ChangeEvent } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { Item, generateItems } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");

  // Генерация 10k элементов один раз
  const items: Item[] = useMemo(() => generateItems(itemCount), [itemCount]);

  // Фильтрация
  const filteredItems: Item[] = useMemo(() => {
    if (!filter) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Row компонент для react-window
  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = filteredItems[index];
    return (
      <div style={style} className="list-item">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <span>{item.category}</span>
      </div>
    );
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        style={{ marginBottom: 10, padding: 5, width: "300px" }}
      />
      <p>
        Showing {filteredItems.length} of {items.length} items
      </p>
      <List
        height={height}
        itemCount={filteredItems.length}
        itemSize={80}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}