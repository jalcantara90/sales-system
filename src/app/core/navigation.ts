interface NavigateItem {
  route: string;
  icon: string;
  title: string;
}

type Devider = 'DEVIDER';
export type AppNavigation = NavigateItem | Devider;

export const navigation: AppNavigation[]= [
  { route: 'dashboard', icon: 'bar_chart', title: 'Dashboard' },
  { route: 'upload-product', icon: 'cloud_upload', title: 'Upload products' },
  { route: 'sale-point', icon: 'credit_card', title: 'Point of Sale' },
  "DEVIDER",
  { route: 'invoices', icon: 'receipt', title: 'Invoices' },
];
