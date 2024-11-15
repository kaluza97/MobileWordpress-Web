import { HeaderObjectType } from "@/services/Settings/fetchSettings.types";

export interface AppDataInterface {
    main: Array<MainItem>, // main is bottom navigation - 1st element in stack navigation
    header: HeaderObjectType,
    stack: Array<View>; // all views without main and without MainItems Views
}

interface View {
    header: HeaderObjectType;
    content: Array<any>;
    views: Array<View>;
}


interface MainItem {
    name: string;
    view: { content: Array<any> }; // second alternative that will complicate the web UI is define content per MenuItem in this scenario stack in AppInterface is simplified
    icon: string;
}