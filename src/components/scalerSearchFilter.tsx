export const scalerSearchFilter = (data: any[], searchText: string) => {
        
    return data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.username?.toLowerCase().includes(searchText.toLowerCase())
    );
}   

