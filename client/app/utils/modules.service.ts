export const getModules = async ()  => {
    const modules = await fetch('/api/modules');
    const data = await modules.json();
    return data;
}

export const getModule = async (id: string) => {
    const module = await fetch(`/api/modules/${id}`);
    const data = await module.json();
    return data;
}

