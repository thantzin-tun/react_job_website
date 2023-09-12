import queryString from 'query-string';

export const routeFilter = (obj: any) => {
    let result = queryString.stringify(obj, {sort: false});
    return `?${result}`
} 