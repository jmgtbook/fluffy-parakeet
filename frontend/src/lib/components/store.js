import { writable } from 'svelte/store'

const persist_storage = (key, initValue) => {
    let storedValue = initValue;

    // 클라이언트 측에서만 실행되도록 설정
    if (typeof window !== 'undefined') {
        const storedValueStr = localStorage.getItem(key);
        storedValue = storedValueStr != null ? JSON.parse(storedValueStr) : initValue;
    }

    const store = writable(storedValue);

    // 클라이언트 측에서만 실행되도록 설정
    if (typeof window !== 'undefined') {
        store.subscribe((val) => {
            localStorage.setItem(key, JSON.stringify(val));
        });
    }

    return store;
};

export const page = persist_storage("page", 0);
export const access_token = persist_storage("access_token", "");
export const username = persist_storage("username", "");
export const is_login = persist_storage("is_login", false);
