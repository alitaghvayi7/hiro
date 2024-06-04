import {useTranslations} from 'next-intl';

export function useTranslate(namespace:string){
    return useTranslations(namespace);
}