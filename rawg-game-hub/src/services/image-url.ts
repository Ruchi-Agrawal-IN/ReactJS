import noImage from '../assets/GameHub Resources/Image Placeholder/no-image-placeholder.webp'

const getCroppedImageurl = (url: string, width: number, height: number) => {
    if(!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target)+ target.length;
    const addedStr = 'crop/'+height+'/'+width+'/';
    return url.slice(0, index)+addedStr+url.slice(index);

}

export default getCroppedImageurl;