export interface FormValues {
  name: string;
  icon: string;
  view: string;
}

export interface NavigationData {
  header: Array<string>;
  content: Array<string>;
  navigation: Array<FormValues>;
}