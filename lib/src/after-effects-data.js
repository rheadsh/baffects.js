//Data

/**
 * Add items to project from a folder using dialog box.
 *  
 * 
 * @method itemsFromFolderGUI
 * @param {String} name Name of the folder to create for items
 *  @returns {ItemCollection} Last added items
 */
pub.itemsFromFolderGUI = function (name) {
    var targetFolder = Folder.selectDialog();
    var files = targetFolder.getFiles();
    for (i = 0; i < files.length; i++) {
        try {
            var importOptions = new ImportOptions(files[i]);
            proj.importFile(importOptions);
        } catch (error) { alert(error.toString()); }
    }
    var thisSelection = proj.selection;
    var folderPath = proj.items.addFolder(name);
    for (var i = 0; i < thisSelection.length; i++) {
        thisSelection[i].parentFolder = folderPath;
    }

    return thisSelection;
};

/**
 * Add items to project from a full path.
 *  
 * 
 * @method itemsFromFolder
 * @param {String} path Folder full path
 * @param {String} name Name of the folder to create for items
 *  @returns {ItemCollection} Last added items
 */
pub.itemsFromFolder = function (path, name) {
    var folder = new Folder(path);
    var files = folder.getFiles();
    for (i = 0; i < files.length; i++) {
        try {
            var importOptions = new ImportOptions(files[i]);
            proj.importFile(importOptions);
        } catch (error) { alert(error.toString()); }
    }
    var thisSelection = proj.selection;
    var folderPath = proj.items.addFolder(name);
    for (var i = 0; i < thisSelection.length; i++) {
        thisSelection[i].parentFolder = folderPath;
    }

    return thisSelection;
};


/**
 * Add items to composition
 *  
 * 
 * @method loadItem
 * @param {String} path Item's path from data folder
 * @param {number} [x] x-coordinate of the item
 * @param {number} [y] y-coordinate of the item
 * @param {number} [z] z-coordinate of the item
 * @param {number} [startTime] Layer's in point 
 * @param {number} [outPoint] Layer's out point
 *  @returns {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity, audiolevels].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created layer reference.
 */
pub.loadItem = function (path, x, y, z, startTime, outPoint) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4],
        f = arguments[5];

    var layer;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 1:
                layer = importItem(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null);
                return layer;
            case 2:
                layer = importItem(thisComp, a, pub.width / 2, pub.height / 2, 0, b, pub.getDuration());
                return layer;
            case 3:
                layer = importItem(thisComp, a, b, c, 0, null, null);
                return layer;
            case 5:
                layer = importItem(thisComp, a, b, c, 0, d, e);
                return layer;
        }
    } else {
        switch (arguments.length) {
            case 1:
                layer = importItem(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null);
                return layer;
            case 2:
                layer = importItem(thisComp, a, pub.width / 2, pub.height / 2, 0, b, pub.getDuration());
                return layer;
            case 4:
                layer = importItem(thisComp, a, b, c, d, null, null);
                return layer;
            case 5:
                layer = importItem(thisComp, a, b, c, d, e, pub.getDuration());
                return layer;
            case 6:
                layer = importItem(thisComp, a, b, c, d, e, f);
                return layer;
        }
    }
};

function importItem(comp, path, x, y, z, inPoint, outPoint) {
    this.obb = new Properties();

    try {
        var data = initDataFile(path, true);
    } catch (e) {
        error("Please save you AE file on the same path of your data folder.")
    }
    var importOptions = new ImportOptions(data);
    var item = proj.importFile(importOptions);

    this.shape = comp.layers.add(item);
    this.obb.layer = this.shape;

    if (inPoint !== null) {
        this.shape.startTime = inPoint;
        this.shape.outPoint = outPoint;
    }

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    setTransformPropertiesObject();

    if (this.shape.hasVideo) {
        pub.anchor(this.obb.layer, currAnchorMode);
        this.obb.position.setValue([x, y, z]);
    }

    if (this.shape.hasAudio) {
        var audio = this.shape.property("ADBE Audio Group");
        for (var i = 0; i < audio.numProperties; i++) {
            this.obb[audio.property(i + 1).name.toLowerCase().replace(/\s/g, '')] = audio.property(i + 1);
        }
    }

    return this.obb;
};

/**
 * Load image sequence to composition
 *  
 * 
 * @method loadSequence
 * @param {String} path Sequence path to data folder 
 * @param {number} startTime Layer's start time
 * @param {number} outPoint Layer's out point
 *  @returns {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created layer reference.
 */
pub.loadSequence = function (path, x, y, z, startTime, outPoint) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4],
        f = arguments[5];

    var layer;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 1:
                layer = importSequence(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null);
                return layer;
            case 2:
                layer = importSequence(thisComp, a, pub.width / 2, pub.height / 2, 0, b, pub.getDuration());
                return layer;
            case 3:
                layer = importSequence(thisComp, a, b, c, 0, null, null);
                return layer;
            case 5:
                layer = importSequence(thisComp, a, b, c, 0, d, e);
                return layer;
        }
    } else {
        switch (arguments.length) {
            case 1:
                layer = importSequence(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null);
                return layer;
            case 2:
                layer = importSequence(thisComp, a, pub.width / 2, pub.height / 2, 0, b, pub.getDuration());
                return layer;
            case 4:
                layer = importSequence(thisComp, a, b, c, d, null, null);
                return layer;
            case 5:
                layer = importSequence(thisComp, a, b, c, d, e, pub.getDuration());
                return layer;
            case 6:
                layer = importSequence(thisComp, a, b, c, d, e, f);
                return layer;
        }
    }
};

function importSequence(comp, path, x, y, z, inPoint, outPoint) {
    this.obb = new Properties();

    try {
        var data = initDataFile(path, true);
    } catch (e) {
        error("Please save you AE file on the same path of your data folder.")
    }
    var importOptions = new ImportOptions(data);

    if (importOptions.canImportAs(ImportAsType.FOOTAGE))
        importOptions.importAs = ImportAsType.FOOTAGE;
    else
        error("Item is not a sequence...")

    importOptions.sequence = true;
    importOptions.forceAlphabetical = true;

    var item = proj.importFile(importOptions);

    this.shape = comp.layers.add(item);
    this.obb.layer = this.shape;

    if (inPoint !== null) {
        this.shape.startTime = inPoint;
        this.shape.outPoint = outPoint;
    }

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    setTransformPropertiesObject();

    pub.anchor(this.obb.layer, currAnchorMode);
    this.obb.position.setValue([x, y, z]);

    return this.obb;
};

/**
 * Load Adobe Illustrator files as composition - retain layer sizes.
 *  
 * 
 * @method loadAI
 * @param {String} path Path to file inside data folder 
 * @param {number} startTime Layer's start time
 * @param {number} outPoint Layer's out point
 *  @returns {Properties} Properties object with attributes [layer, anchorpoint, position, xposition, yposition, zposition, scale, orientation, xrotation, yrotation, zrotation, rotation, opacity].
 *                      Each attribute is a Property object for convenience in animation, except of layer which is the new created layer reference.
 */
pub.loadAI = function (path, x, y, z, startTime, outPoint, time) {
    var a = arguments[0],
        b = arguments[1],
        c = arguments[2],
        d = arguments[3],
        e = arguments[4],
        f = arguments[5],
        g = arguments[6];

    var layer;
    if (!curr3DMode) {
        switch (arguments.length) {
            case 1:
                layer = importAI(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null, pub.getDuration());
                return layer;
            case 2:
                layer = importAI(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null, b);
                return layer;
            case 3:
                layer = importAI(thisComp, a, b, c, 0, null, null, pub.getDuration());
                return layer;
            case 4:
                layer = importAI(thisComp, a, b, c, 0, null, null, d);
                return layer;
            case 6:
                layer = importAI(thisComp, a, b, c, 0, d, e, f);
                return layer;
        }
    } else {
        switch (arguments.length) {
            case 1:
                layer = layer = importAI(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null, pub.getDuration());
                return layer;
            case 2:
                layer = importAI(thisComp, a, pub.width / 2, pub.height / 2, 0, null, null, b);
                return layer;
            case 4:
                layer = importAI(thisComp, a, b, c, d, null, null, pub.getDuration());
                return layer;
            case 5:
                layer = importAI(thisComp, a, b, c, d, null, null, e);
                return layer;
            case 7:
                layer = importAI(thisComp, a, b, c, d, e, f, g);
                return layer;
        }
    }
};

function importAI(comp, path, x, y, z, inPoint, outPoint, time) {
    this.obb = new Properties();

    try {
        var data = initDataFile(path, true);
    } catch (e) {
        error("Please save you AE file on the same path of your data folder.")
    }
    var importOptions = new ImportOptions(data);

    if (importOptions.canImportAs(ImportAsType.COMP_CROPPED_LAYERS))
        importOptions.importAs = ImportAsType.COMP_CROPPED_LAYERS;
    else
        error("Item is not a compatible Adobe Illustrator file...")

    var item = proj.importFile(importOptions);

    this.shape = comp.layers.add(item);
    this.obb.layer = this.shape;

    if (inPoint !== null) {
        this.shape.startTime = inPoint;
        this.shape.outPoint = outPoint;
    }

    if (curr3DMode) {
        this.shape.threeDLayer = true;
    }

    setTransformPropertiesObject();

    pub.anchor(this.obb.layer, currAnchorMode);
    this.obb.position.setValue([x, y, z]);

    var aiComp = pub.getComp(this.shape.name);
    aiComp.duration = time;
    var all = aiComp.layers;
    for (var i = 1; i <= all.length; i++) {
        all[i].outPoint = aiComp.duration;
    }

    return this.obb;
};