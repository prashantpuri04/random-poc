export const scalerSearchFilter = (data: any[], searchText: string) => {
        const items = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" }
    ];
    
    return data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.username?.toLowerCase().includes(searchText.toLowerCase())
    );
}   

