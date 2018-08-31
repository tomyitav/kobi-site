const isSelected = (name: string, propName: string): string => {
    return name === propName ? "SelectedItem" : "non-selected";
}

export default isSelected;