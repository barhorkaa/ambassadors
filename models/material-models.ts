export type MaterialMinModel = {
  id: string;
  name: string;
};

export type MaterialDetailModel = MaterialMinModel & {
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
