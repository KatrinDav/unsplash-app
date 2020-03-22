export const UNSPLASH_BASE_URL = "https://api.unsplash.com";
export const UNSPLASH_ACCESS_KEY = "3f664ef5e4273eb908008a62f5bb36a44010ddbd641644700adac1dcd8a48e49";
export const UNSPLASH_LIST_URL = 'https://api.unsplash.com/collections/:id/photos/?page=1&per_page=30&';
export const UNSPLASH_PHOTO_URL = 'https://api.unsplash.com/photos/:id/?'

export const fillPath = (strUrl = '', params = {}) => {
    return Object.entries(params).reduce((str, [id, value]) => {
        return str.replace(`:${id}`, value);
    }, strUrl);
}
