function duplicateSpreadsheet(original){
    if (original.hasPenddingChanges) {
        throw new Error ('You need to save the file before you can duplicate it.');
    }
    let copy = {
        created: Date.now(),
        author: original.author,
        cells: original.cells,
        metadata: original.metadata,
    }
    copy.metadata.title = 'Copy of' + original.metadata.title  //bug to pay attention
    return copy;
}