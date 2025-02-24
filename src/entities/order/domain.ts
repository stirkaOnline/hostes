
export type OrderEntity = OrderIdleEntity | OrderProgressEntity | OrderOverEntity | OrderOverIsOverEntity;

export type OrderIdleEntity = {
    id: string;
    creator: OrderCreatorEntity;
    status: "idle";
};

export type OrderProgressEntity = {
    id: string;
    workers: OrderCreatorEntity[];
    field: Field[];
    status: "inProgress";
};

export type OrderOverEntity = {
    id: string;
    creator: OrderCreatorEntity[];
    field: Field[];
    status: "isOver";

    isOver?: boolean;
    author?: OrderCreatorEntity;
};

export type OrderOverIsOverEntity = {
    id: string;
    creator: OrderCreatorEntity[];
    field: Field[];
    status: "isOverFinal";
};

export type OrderCreatorEntity = {
    id: string;
    login: string;
    rating: number;
};

export type Field = Cell[];
export type Cell = OrderSymbol | null;
export type OrderSymbol = string;

