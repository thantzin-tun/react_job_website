export const get_theme_mode = () => {
    let mode: any = localStorage.getItem("mode");
    return JSON.parse(mode);
}


export const set_theme_mode = (mode: string) => {
    localStorage.setItem("mode",JSON.stringify(mode));
}