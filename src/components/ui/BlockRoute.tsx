import React, { useMemo } from "react";

type Direction = "up" | "down" | "left" | "right";

export interface BlockRouteItem {
  id: string | number;
  content: React.ReactNode;
  next?: Direction | null;
}

export interface BlockRouteProps {
  items: BlockRouteItem[];
  /** 每个方块的像素尺寸 */
  size?: number;
  /** 方块间距（像素） */
  gap?: number;
  /** 容器内边距（像素） */
  padding?: number;
  /** 起点位置（网格坐标） */
  start?: { x: number; y: number };
  /** 倾斜角度（度），默认 0（无倾斜） */
  tiltDeg?: number;
  /** 倾斜轴：x 或 y，默认 x */
  tiltAxis?: "x" | "y";
  /** 3D 透视距离，默认 800px */
  perspective?: number;
  /** 额外沿 Y 轴的倾斜角度（度），正值向右倾斜 */
  tiltYDeg?: number;
  /** 平面顺时针旋转角度（度），默认 0（无旋转） */
  rotateDeg?: number;
  /** 自定义方块类名 */
  itemClassName?: string;
  /** 自定义容器类名 */
  className?: string;
}

/**
 * 根据 items 的 next 方向把每个方块放到网格坐标，并渲染为一个链路图。
 * 简化规则：
 * - 从 start 开始，items[0] 放置于起点；
 * - 之后每个 item 相对上一个 item 的 next 方向移动一格；
 * - 不做碰撞/越界检查；
 */
const BlockRoute: React.FC<BlockRouteProps> = ({
  items,
  size = 64,
  gap = 1,
  padding = 1,
  start = { x: 0, y: 0 },
  tiltDeg = 0,
  tiltAxis = "x",
  perspective = 800,
  tiltYDeg = 0,
  rotateDeg = 0,
  itemClassName,
  className,
}) => {
  const gridPositions = useMemo(() => {
    const positions: { x: number; y: number }[] = [];
    let cursor = { ...start };
    items.forEach((_item, index) => {
      if (index === 0) {
        positions.push({ ...cursor });
      } else {
        const prevNext = items[index - 1]?.next;
        if (prevNext === "up") cursor = { x: cursor.x, y: cursor.y - 1 };
        if (prevNext === "down") cursor = { x: cursor.x, y: cursor.y + 1 };
        if (prevNext === "left") cursor = { x: cursor.x - 1, y: cursor.y };
        if (prevNext === "right") cursor = { x: cursor.x + 1, y: cursor.y };
        positions.push({ ...cursor });
      }
    });
    return positions;
  }, [items, start]);

  const pixel = useMemo(() => size, [size]);
  const cellGap = useMemo(() => Math.max(0, gap), [gap]);
  const cellPadding = useMemo(() => Math.max(0, padding), [padding]);

  const toLeftTop = (x: number, y: number) => {
    const left = cellPadding + x * (pixel + cellGap);
    const top = cellPadding + y * (pixel + cellGap);
    return { left, top };
  };

  // 计算容器尺寸
  const containerSize = useMemo(() => {
    if (gridPositions.length === 0) return { width: 0, height: 0 };
    const xs = gridPositions.map((p) => p.x);
    const ys = gridPositions.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const width =
      cellPadding * 2 + (maxX - minX + 1) * pixel + (maxX - minX) * cellGap;
    const height =
      cellPadding * 2 + (maxY - minY + 1) * pixel + (maxY - minY) * cellGap;
    const offset = { x: -minX, y: -minY };
    return { width, height, offset } as const;
  }, [gridPositions, pixel, cellGap, cellPadding]);

  const transform = useMemo(() => {
    const z = `rotateZ(${rotateDeg}deg)`;
    const primary = tiltDeg
      ? tiltAxis === "y"
        ? ` rotateY(${tiltDeg}deg)`
        : ` rotateX(${tiltDeg}deg)`
      : "";
    const extraY = tiltYDeg ? ` rotateY(${tiltYDeg}deg)` : "";
    return `${z}${primary}${extraY}`;
  }, [rotateDeg, tiltDeg, tiltAxis, tiltYDeg]);

  return (
    <div
      style={{ perspective: `${perspective}px`, perspectiveOrigin: "50% 50%" }}
    >
      <div
        className={className}
        style={{
          position: "relative",
          width: containerSize.width,
          height: containerSize.height,
          color: "#333",
          transform,
          transformOrigin: "50% 50%",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {items.map((item, idx) => {
          const pos = gridPositions[idx];
          if (!pos) return null;
          const { left, top } = toLeftTop(
            pos.x + (containerSize.offset?.x || 0),
            pos.y + (containerSize.offset?.y || 0)
          );
          return (
            <div
              key={item.id}
              style={{
                position: "absolute",
                left,
                top,
                width: pixel,
                height: pixel,
                borderRadius: 8,
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                color: "inherit",
              }}
              className={itemClassName}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlockRoute;
