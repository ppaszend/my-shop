export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  productsAmount: number;
  focused?: boolean;
  mouseOverButton?: boolean;
}
