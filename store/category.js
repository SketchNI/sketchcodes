export let category = () => ({
    category: {
        id: null,
        label: null,
    }
});

export let mutations = {
    store(category, data) {
        category.category = {
            id: data.id,
            label: data.label,
        };
    },

    clear(category) {
        category.category = {
            id: null,
            label: null,
        }
    }
}
