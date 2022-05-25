/* eslint-disable no-unused-vars */
declare type SquareType = "empty" | "road" | "x" | "start" | "win";
declare type Field = SquareType[][];
declare type Position = { row: number; col: number };
declare type Direction = "up" | "down" | "left" | "right";
