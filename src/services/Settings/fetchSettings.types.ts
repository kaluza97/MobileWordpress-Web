
export interface NavigationObjectType {
  name: string;
  icon: string;
  view: string;
}

export interface HeaderObjectType {
  viewId: string;
  title: string;
}

export interface Settings {
  navigation: Array<NavigationObjectType>;
  header: Array<HeaderObjectType>;
  content: string;
}



