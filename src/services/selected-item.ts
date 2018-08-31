const isSelected = (serialNumber: number, propId: number): string => {
    return serialNumber === propId ? "SelectedItem" : "non-selected";
}

export default isSelected;