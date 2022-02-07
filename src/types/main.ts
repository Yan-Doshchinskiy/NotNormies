export enum Pages {
    HOME = "/"
}

export interface SingleRout {
    title: string,
    link: Pages,
    component: () => JSX.Element,
}


export default Pages
