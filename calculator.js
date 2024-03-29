var gen = 6, db = null;

/**
 * This object will load all the JSON data files as needed to avoid massive delays on page load.
 * Generally most of the methods and members follow the same format.
 * 
 * Underscored variable names should not be accessed; they are there only to hold the loaded data and may or may not be null.
 * 
 * If a method is not given a variable name it will return the whole object associated with its corresponding variable.
 * This can be incredibly ineffecient when used to only access a single record as it seems to (have not verified) copy
 * the entire object, which significantly slowed down the UI.
 * 
 * Most of the variables will be accessed with however many variables are needed to return a specific record.
 * For example, PokeType1 takes the first input to determine which generation of Pokemon games we are referring to,
 * and the second input will determine the pokemon using its ID.
 */
function Database() {
    // The directories of generation specific information such as stats, type tables, and released items
    this.gens = [null, "db/rby/", "db/gsc/", "db/adv/", "db/hgss/", "db/b2w2/", "db/oras/"];
    this._damageClass = null;
    this.damageClass = function (pokeId) {
        if (this._damageClass === null) {
            this._damageClass = this.getJSON("db/damageClass.json");
        }
        if (typeof pokeId === "undefined") {
            return this._damageClass;
        } else if (pokeId in this._damageClass) {
            return this._damageClass[pokeId];
        }
        return 0;
    };
    
    this._typeDamageClass = null;
    this.typeDamageClass = function (typeId) {
        if (this._typeDamageClass === null) {
            this._typeDamageClass = this.getJSON("db/typeDamageClass.json");
        }
        if (typeof typeId === "undefined") {
            return this._typeDamageClass;
        } else if (typeId in this._typeDamageClass) {
            return this._typeDamageClass[typeId];
        }
        return 0;
    };
    
    this._pokemons = null;
    this.pokemons = function (pokeId) {
        if (this._pokemons === null) {
            this._pokemons = this.getJSON("db/pokemons.json");
        }
        if (typeof pokeId === "undefined") {
            return this._pokemons;
        }
        return this._pokemons[pokeId];
    };
    
    this._natures = null;
    this.natures = function (natureId) {
        if (this._natures === null) {
            this._natures = this.getJSON("db/natures.json");
        }
        if (typeof natureId === "undefined") {
            return this._natures;
        }
        return this._natures[natureId];
    };
    
    this._abilities = null;
    this.abilities = function (abilityId) {
        if (this._abilities === null) {
            this._abilities = this.getJSON("db/abilities.json");
        }
        if (typeof abilityId === "undefined") {
            return this._abilities;
        }
        return this._abilities[abilityId];
    };
    
    this._items = null;
    this.items = function (itemId) {
        if (this._items === null) {
            this._items = this.getJSON("db/items.json");
        }
        if (typeof itemId === "undefined") {
            return this._items;
        }
        return this._items[itemId];
    };
    
    this._moves = null;
    this.moves = function (moveId) {
        if (this._moves === null) {
            this._moves = this.getJSON("db/moves.json");
        }
        if (typeof moveId === "undefined") {
            return this._moves;
        }
        return this._moves[moveId];
    };
    
    this._berryEffects = null;
    this.berryEffects = function (berryId) {
        if (this._berryEffects === null) {
            this._berryEffects = this.getJSON("db/berryEffects.json");
        }
        if (typeof berryId === "undefined") {
            return this._berryEffects;
        }
        return this._berryEffects[berryId];
    };
    
    this._itemEffects = null;
    this.itemEffects = function (itemId) {
        if (this._itemEffects === null) {
            this._itemEffects = this.getJSON("db/itemEffects.json");
        }
        if (typeof itemId === "undefined") {
            return this._itemEffects;
        }
        return this._itemEffects[itemId];
    };
    
    this._berryType = null;
    this.berryType = function (berryId) {
        if (this._berryType === null) {
            this._berryType = this.getJSON("db/berryType.json");
        }
        if (typeof berryId === "undefined") {
            return this._berryType;
        }
        return this._berryType[berryId];
    };
    
    this._berryPower = null;
    this.berryPower = function (berryId) {
        if (this._berryPower === null) {
            this._berryPower = this.getJSON("db/berryPower.json");
        }
        if (typeof berryId === "undefined") {
            return this._berryPower;
        }
        return this._berryPower[berryId];
    };
    
    this._flingPower = null;
    this.flingPower = function (itemId) {
        if (this._flingPower === null) {
            this._flingPower = this.getJSON("db/itemPower.json");
        }
        if (typeof itemId === "undefined") {
            return this._flingPower;
        } else if (itemId in this._flingPower) {
            return this._flingPower[itemId];
        }
        return 10;
    };
    
    this._weight = null;
    this.weight = function (pokeId) {
        if (this._weight === null) {
            this._weight = this.getJSON("db/weight.json");
        }
        if (typeof pokeId === "undefined") {
            return this._weight;
        }
        return this._weight[pokeId];
    };
    
    this._berries = null;
    this.berries = function (berryId) {
        if (this._berries === null) {
            this._berries = this.getJSON("db/berries.json");
        }
        if (typeof berryId === "undefined") {
            return this._berries;
        }
        return this._berries[berryId];
    };
    
    this._recoil = null;
    this.recoil = function (id) {
        if (this._recoil === null) {
            this._recoil = this.getJSON("db/recoil.json");
        }
        if (typeof id === "undefined") {
            return this._recoil;
        }
        return this._recoil[id];
    };
    
    this._moveFlags = null;
    this.moveFlags = function (moveId) {
        if (this._moveFlags === null) {
            this._moveFlags = this.getJSON("db/flags.json");
        }
        if (typeof moveId === "undefined") {
            return this._moveFlags;
        }
        return this._moveFlags[moveId];
    };
    
    this._flinch = null;
    this.flinch = function (moveId) {
        if (this._flinch === null) {
            this._flinch = this.getJSON("db/flinch.json");
        }
        if (typeof moveId === "undefined") {
            return this._flinch;
        }
        return this._flinch[moveId];
    };
    
    this._moveEffects = null;
    this.moveEffects = function (moveId) {
        if (this._moveEffects === null) {
            this._moveEffects = this.getJSON("db/effect.json");
        }
        if (typeof moveId === "undefined") {
            return this._moveEffects;
        }
        return this._moveEffects[moveId];
    };
    
    this._abilityEffects = null;
    this.abilityEffects = function (abilityId) {
        if (this._abilityEffects === null) {
            this._abilityEffects = this.getJSON("db/abilityEffects.json");
        }
        if (typeof abilityId === "undefined") {
            return this._abilityEffects;
        }
        return this._abilityEffects[abilityId];
    };
    
    this._evolutions = null;
    this.evolutions = function (pokeId) {
        if (this._evolutions === null) {
            this._evolutions = this.getJSON("db/evolutions.json");
        }
        if (typeof pokeId === "undefined") {
            return this._evolutions;
        }
        return this._evolutions[pokeId];
    };
    
    this._stats = [];
    this.stats = function (generation, pokeId) {
        if (!(generation in this._stats)) {
            this._stats[generation] = this.getJSON(this.gens[generation] + "stats.json");
        }
        if (typeof pokeId === "undefined") {
            return this._stats[generation];
        }
        return this._stats[generation][pokeId];
    };
    
    this._movePowers = [];
    this.movePowers = function (generation, pokeId) {
        if (!(generation in this._movePowers)) {
            this._movePowers[generation] = this.getJSON(this.gens[generation] + "power.json");
        }
        if (typeof pokeId === "undefined") {
            return this._movePowers[generation];
        }
        return this._movePowers[generation][pokeId];
    };
    
    this._moveTypes = [];
    this.moveTypes = function (generation, pokeId) {
        if (!(generation in this._moveTypes)) {
            this._moveTypes[generation] = this.getJSON(this.gens[generation] + "moveTypes.json");
        }
        if (typeof pokeId === "undefined") {
            return this._moveTypes[generation];
        }
        return this._moveTypes[generation][pokeId];
    };
    
    this._pokeType1 = [];
    this.pokeType1 = function (generation, pokeId) {
        if (!(generation in this._pokeType1)) {
            this._pokeType1[generation] = this.getJSON(this.gens[generation] + "pokeType1.json");
        }
        if (typeof pokeId === "undefined") {
            return this._pokeType1[generation];
        }
        return this._pokeType1[generation][pokeId];
    };
    
    this._pokeType2 = [];
    this.pokeType2 = function (generation, pokeId) {
        if (!(generation in this._pokeType2)) {
            this._pokeType2[generation] = this.getJSON(this.gens[generation] + "pokeType2.json");
        }
        if (typeof pokeId === "undefined") {
            return this._pokeType2[generation];
        }
        return this._pokeType2[generation][pokeId];
    };
    
    this._typesTable = [];
    this.typesTable = function (generation, attackingType, defendingType) {
        if (!(generation in this._typesTable)) {
            this._typesTable[generation] = this.getJSON(this.gens[generation] + "typesTable.json");
        }
        if (typeof attackingType === "undefined" || typeof defendingType === "undefined") {
            return this._typesTable[generation];
        }
        return this._typesTable[generation][attackingType][defendingType];
    };
    
    this._minMaxHits = [];
    this.minMaxHits = function (generation, moveId) {
        if (!(generation in this._minMaxHits)) {
            this._minMaxHits[generation] = this.getJSON(this.gens[generation] + "minMaxHits.json");
        }
        if (typeof moveId === "undefined") {
            return this._minMaxHits[generation];
        }
        return this._minMaxHits[generation][moveId];
    };
    
    this._ranges = [];
    this.ranges = function (generation, moveId) {
        if (generation <= 1) { // no file for gen 1, although to be honest I think only gens >= 3 need this.
            return null;
        }
        if (!(generation in this._ranges)) {
            this._ranges[generation] = this.getJSON(this.gens[generation] + "range.json");
        }
        if (typeof moveId === "undefined") {
            return this._ranges[generation]
        }
        return this._ranges[generation][moveId];
    };
    
    // the functions below are unneeded for calculations and will not load files unless explicitly called
    this._releasedPokes = null;
    this.releasedPokes = function (generation, index) {
        if (this._releasedPokes === null) {
            this._releasedPokes = this.getJSON("db/releasedPokes.json");
        }
        if (typeof index === "undefined") {
            return this._releasedPokes[generation];
        }
        return this._releasedPokes[generation][index];
    };
    
    this._releasedMoves = null;
    this.releasedMoves = function (generation, index) {
        if (this._releasedMoves === null) {
            this._releasedMoves = this.getJSON("db/releasedMoves.json");
        }
        if (typeof index === "undefined") {
            return this._releasedMoves[generation];
        }
        return this._releasedMoves[generation][index];
    };
    
    this._releasedItems = null;
    this.releasedItems = function (generation, index) {
        if (this._releasedItems === null) {
            this._releasedItems = this.getJSON("db/releasedItems.json");
        }
        if (typeof index === "undefined") {
            return this._releasedItems[generation];
        }
        return this._releasedItems[generation][index];
    };
    
    this._releasedBerries = null;
    this.releasedBerries= function (generation, index) {
        if (this._releasedBerries === null) {
            this._releasedBerries = this.getJSON("db/releasedBerries.json");
        }
        if (typeof index === "undefined") {
            return this._releasedBerries[generation];
        }
        return this._releasedBerries[generation][index];
    };
    
    this._genders = null;
    this.genders = function(pokeId) {
        if (this._genders === null) {
            this._genders = this.getJSON("db/gender.json");
        }
        if (typeof pokeId === "undefined") {
            return this._genders;
        }
        return this._genders[pokeId];
    }
    
    this._types = null;
    this.types = function (typeId) {
        if (this._types === null) {
            this._types = this.getJSON("db/types.json");
        }
        if (typeof typeId === "undefined") {
            return this._types;
        }
        return this._types[typeId];
    }
    
    this._hiddenPowers = null;
    this.hiddenPowers = function (typeId) {
        if (this._hiddenPowers === null) {
            this._hiddenPowers = this.getJSON("db/hiddenPowers.json");
        }
        if (typeof typeId === "undefined") {
            return this._hiddenPowers;
        }
        return this._hiddenPowers[typeId];
    }
    
    // I just hardcoded these in, because I can't seem to find where they're stored on PO.
    this._hiddenPowersGen2 = {"1"  : [[3,  12, 12, 15, 15, 15]],
                              "2"  : [[7,  12, 13, 15, 15, 15]],
                              "3"  : [[3,  12, 14, 15, 15, 15]],
                              "4"  : [[7,  12, 15, 15, 15, 15]],
                              "5"  : [[11, 13, 12, 15, 15, 15]],
                              "6"  : [[15, 13, 13, 15, 15, 15]],
                              "7"  : [[11, 13, 14, 15, 15, 15]],
                              "8"  : [[15, 13, 15, 15, 15, 15]],
                              "9"  : [[3,  14, 12, 15, 15, 15]],
                              "10" : [[7,  14, 13, 15, 15, 15]],
                              "11" : [[3,  14, 14, 15, 15, 15]],
                              "12" : [[7,  14, 15, 15, 15, 15]],
                              "13" : [[11, 15, 12, 15, 15, 15]],
                              "14" : [[15, 15, 13, 15, 15, 15]],
                              "15" : [[11, 15, 14, 15, 15, 15]],
                              "16" : [[15, 15, 15, 15, 15, 15]]};
    this.hiddenPowersGen2 = function (typeId) {
        if (typeof typeId === "undefined") {
            return this._hiddenPowersGen2;
        }
        return this._hiddenPowersGen2[typeId];
    }
    
    this._ability1 = null;
    this.ability1 = function (pokeId) {
        if (this._ability1 === null) {
            this._ability1 = this.getJSON("db/ability1.json");
        }
        if (typeof pokeId === "undefined") {
            return this._ability1;
        }
        if (pokeId in this._ability1) {
            return this._ability1[pokeId];
        }
        return -1;
    }
    
    this._ability2 = null;
    this.ability2 = function (pokeId) {
        if (this._ability2 === null) {
            this._ability2 = this.getJSON("db/ability2.json");
        }
        if (typeof pokeId === "undefined") {
            return this._ability2;
        }
        if (pokeId in this._ability2) {
            return this._ability2[pokeId];
        }
        return -1;
    }
    
    this._ability3 = null;
    this.ability3 = function (pokeId) {
        if (this._ability3 === null) {
            this._ability3 = this.getJSON("db/ability3.json");
        }
        if (typeof pokeId === "undefined") {
            return this._ability3;
        }
        if (pokeId in this._ability3) {
            return this._ability3[pokeId];
        }
        return -1;
    }
};

Database.prototype.getJSON = function (file) {
    var httpreq;
    try {
        // Chrome, Firefox, Safari, Opera, IE 8 or 9 or so and up
        httpreq = new XMLHttpRequest();
    } catch (e) {
        try {
            // old version of Internet Explorer
            httpreq = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (f) {
            try {
                // older
                httpreq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (g) {
                // May want to advise installing the rifle plugin for defending against that time period's Velociraptors.
                alert("potato!!");
            }
        }
    }
    httpreq.open("GET", file, false);
    httpreq.send();
    var result = null;
    try {
        result = JSON.parse(httpreq.responseText);
    } catch (e) {
        /*
         * If this wasn't here I'd still be looking for a needle in a haystack trying to find "bad" characters
         * that got transfered from PO's database when I reformatted it to JSON.
         * I wish I thought of this earlier...
         */
        console.log(e.name, e.message, file);
    }
    return result;
};

var Sulcalc = (function() {

function WeightedArray (a) {
    this.warray = [];
    
    // begin init
    if (a.length !== 0) { // check for an empty array
        a = a.sort(function (a, b) { // sort the array into ascending order
            return a - b;
        });
        // initial entry; all values will be stored as an ordered pair: [value, occurences]
        var temp = [a[0], 0];
        for (var i = 0; i < a.length; i++) {
            /* 
             * Because the array is ordered, as soon as a different value is encountered
             * we will know that there are no more of the value we were counting.
             */
            if (a[i] !== temp[0]) {
                this.warray.push(temp); // add the count 
                temp = [a[i], 1];
            } else { // a new value is not encountered
                // increment the count of the current value in the temporary pair.
                temp[1]++;
            }
        }
        this.warray.push(temp); // make sure we don't lose the last value
    }
    // end init

    this.add = function (val, inc) {
        for (var i = 0; i < this.warray.length; i++) {
            if (val === this.warray[i][0]) { // the element exists
                // add it to the appropriate pair and stop
                this.warray[i][1] += inc; // add n values to the ordered pair in the set
                return;
            } else if (val < this.warray[i][0]) {
                // the array is ordered, so the value cannot be after this point
                // insert 
                this.warray.splice(i, [val, inc]); // insert an ordered pair with n values
                return;
            }
        }
        // the value's possible location was never passed and must be inserted at the end to be in order
        this.warray.push([val, inc]);
    }
    
    this.combine = function (w) {
        /*
         * Calculating all the possible combinations of a weighted array is
         * actually a lot more efficient.
         * If array A has 5 2s and array B has 2 3s
         * then the there will be 10 (5*2) 5s (2+3) from the combination of just these numbers.
         * Of course more than one combination can/will form the element 5
         * such as 1 and 4 so the add method is used to prevent similar ordered pairs.
         */
        var temp = new WeightedArray([]);
        for (var i = 0; i < this.warray.length; i++) {
            for (var j = 0; j < w.warray.length; j++) {
                // Pair A combine Pair B: (value A + value B, count A * count B)
                temp.add(this.warray[i][0] + w.warray[j][0],
                         this.warray[i][1] * w.warray[j][1]);
            }
        }
        return temp;
    }
    
    this.total = function() {
        // elements are stored as a weighted array in which the weights are the count of the element
        // summed together would be the length of the set
        var t = 0;
        for (var i = 0; i < this.warray.length; i++) {
            t += this.warray[i][1];
        }
        return t;
    }
}

WeightedArray.prototype.toString = function() {
    // not super pretty, but it works for debugging
    var accstr = "";
    for(var i = 0; i < this.warray.length; i++) {
        accstr += this.warray[i][0] + ":" + this.warray[i][1] + ", ";
    }
    return accstr;
}

// "enumerations"
var Stats = {HP:0, ATK:1, DEF:2, SATK:3, SDEF:4, SPD:5, ACC:6, EVA:7, SPC:3}; // special overlaps with SpAtk for gen 2
var Genders = {NOGENDER:0, MALE:1, FEMALE:2};
var DamageClasses = {OTHER:0, PHYSICAL:1, SPECIAL:2};
var Weathers = {CLEAR:0, SUN:4, RAIN:2, SAND:3, HAIL:1, HARSH_SUN:6, HEAVY_RAIN:5, STRONG_WINDS:7};
var Statuses = {NOSTATUS:0, POISONED:1, BADLYPOISONED:2, BURNED:3, PARALYZED:4, ASLEEP:5, FROZEN:6};
var Types = {NORMAL:0, FIGHTING:1, FLYING:2, POISON:3, GROUND:4, ROCK:5, BUG:6,
             GHOST:7, STEEL:8, FIRE:9, WATER:10, GRASS:11, ELECTRIC:12,
             PSYCHIC:13, ICE:14, DRAGON:15, DARK:16, FAIRY:17, CURSE:18}; // curse should be used in the absence of type

function Pokemon() {
    this.id = "0:0"; // missingno default
    this.evs = gen <= 2 ? [255, 255, 255, 255, 255, 255] // gen 2 lets you max out all EVs, which is usually desired
                        : [0, 0, 0, 0, 0, 0]; // limited to 510 total EVs, so just start out with none.
    this.ivs = gen <= 2 ? [15, 15, 15, 15, 15, 15] // DVs
                        : [31, 31, 31, 31, 31, 31]; // IVs in gen 3+
    this.boosts = [0, 0, 0, 0, 0, 0, 0, 0]; // "HP Boost" is just there to keep arrays in order, make sure you have a 0/ even though it isn't used!
    this.level = 100; // competitive standard
    this.nature = 0; // hardy nature
    this.status = Statuses.NOSTATUS; // NOSTATUS, POISONED, BADLYPOISONED, BURNED, PARALYZED, ASLEEP, FROZEN
    this.currentHP = 0; // no way to guess this
    this.ability = new Ability();
    this.item = new Item();
    this.happiness = 0; // maximum of 255
    this.autotomize = false;
    this.unburden = false;
    this.tailwind = false;
    this.grounded = false;
    this.flowerGift = false;
    this.powerTrick = false;
    this.gender = Genders.NOGENDER; // NOGENDER, MALE, FEMALE
    this.addedType = Types.CURSE; // GHOST: Trick or Treat, GRASS: Forest's Curse, CURSE: Nothing; They can't exist simultaneously
    this.overrideTypes = [Types.CURSE, Types.CURSE]; // curse should be used for "no type"
    this.override = false;
    
    this.setNatureName = function (n) {
        for (nat in db.natures()) {
            if (db.natures(nat) === n) {
                this.nature = parseInt(nat, 10);
                return;
            }
        }
    }
    
    this.natureName = function() {
        return db.natures(this.nature)
    }
    
    this.setName = function (n) {
        for (p in db.pokemons()) {
            if (db.pokemons(p) === n) {
                this.id = p;
                return;
            }
        }
    }
    
    this.name = function() {
        return db.pokemons(this.id);
    }
    
    this.form = function() { // maybe we could call this genus?
        if (this.id.indexOf(":") !== this.id.lastIndexOf(":")) {
            return this.id.substring(this.id.indexOf(":") + 1, this.id.lastIndexOf(":"));
        }
        return this.id.substr(this.id.indexOf(":") + 1);
    }
    
    this.formType = function() { // perhaps the family?
        if (this.id.indexOf(":") !== this.id.lastIndexOf(":")) {
            return this.id.substr(this.id.lastIndexOf(":") + 1);
        }
        return "";
    }
    
    this.initialForm = function() { // ancestor? bio is fun
        var testId = this.species() + ":0:H";
        if (typeof db.pokemons(testId) !== "undefined") {
            return testId;
        }
        return this.id;
    }
    
    this.species = function() {
        return this.id.substring(0, this.id.indexOf(":"));
    }
    
    this.natureMultiplier = function (s) { // -1,0,1
        var stat2 = [0, 1, 2, 4, 5, 3];
        return ((Math.floor(this.nature / 5) === stat2[s] - 1) ? 1 : 0) - ((this.nature % 5 === stat2[s] - 1) ? 1 : 0);
    }
    
    this.stat = function (s) {
        // as a simplification to the gen 1/2 stat calculation I enter the EVs as /255 rather than /65535
        // the stats are exactly the same (can't get higher/lower or somewhere impossibly inbetween)
        // this makes it much easier for the user to enter them, as well as the programmer.
        if (this.powerTrick && s === Stats.ATK) {
            s = Stats.DEF;
        } else if (this.powerTrick && s === Stats.DEF) {
            s = Stats.ATK;
        }
        var ev, iv;
        if (gen <= 2 && s === Stats.HP) {
            // gens 1 & 2 don't have an HP DV. It must be calculated from the other 4.
            // If the DV is even it's 0, if it's odd it's 1 (DV & 1)
            // the four bits are arranged in the order Attack, Defense, Speed, Special
            iv = (this.ivs[Stats.ATK] & 1) << 3
                  | (this.ivs[Stats.DEF] & 1) << 2
                  | (this.ivs[Stats.SPD] & 1) << 1
                  | (this.ivs[Stats.SPC] & 1);
            ev = this.evs[Stats.HP];
        } else if (gen === 2 && (s === Stats.SDEF || s === Stats.SATK)) {
            // gen 2 has gen 1's data structures and doesn't have a separate SpDef DV
            iv = this.ivs[Stats.SPC];
            ev = this.evs[Stats.SPC];
        } else {
            iv = this.ivs[s];
            ev = this.evs[s];
        }
        var base = this.baseStat(s);
        var n = this.natureMultiplier(s);
        // now that we're neat and tidy with ev, iv, base, and n
        if (s === Stats.HP) {
            if (gen <= 2) {
                // (2*(iv+base) + ev/4) * level/100 + level + 10
                return Math.floor(((iv + base) * 2 + (ev >> 2)) * this.level / 100) + this.level + 10;
            }
            if (this.id === "292:0") { // shedinja has 1 HP no matter what
                return 1;
            }
            // (iv + 2*base + ev/4 + 100 ) * level/100 + 10
            return Math.floor((iv + 2 * base + (ev >> 2) + 100) * this.level / 100) + 10;
        }
        if (gen <= 2) {
            // (2*(iv+base) + ev/4) * level/100 + 5
            return Math.floor(((iv + base) * 2 + (ev >> 2)) * this.level / 100) + 5;
        }
        // [(iv+2*base+ev/4)*level/100+5]*nature
        return Math.floor((Math.floor((iv + 2 * base + (ev >> 2)) * this.level / 100) + 5) * (10 + n) / 10);
    }
    
    this.boost = function (s) {
        return this.boosts[s];
    }
    
    this.boostedStat = function (s) {
        var boost = this.boost(s);
        var num, den; // numerator and denominator
        if (gen > 2) {
            num = den = 2;
            if (boost >= 0) {
                num += boost;
            } else {
                den -= boost;
            }
        } else {
            var numerators = [25, 28, 33, 40, 50, 66, 1, 15, 2, 25, 3, 35, 4];
            var denominators = [100, 100, 100, 100, 100, 100, 1, 10, 1, 10, 1, 10, 1];
            num = numerators[6 + boost];
            den = denominators[6 + boost];
        }
        return Math.floor(this.stat(s) * num / den); // stat * (2+boost) / (2-drop)
    }
    
    this.simpleBoostedStat = function (s) {
        // the ability simple doubles stat boosts
        var boost = this.boosts[s]*2;
        var num = 2;
        var den = 2;
        if (boost >= 0) {
            num += boost;
        } else {
            den += boost;
        }
        return Math.floor(this.stat(s) * num / den); // stat * (2+boost) / (2-drop)
    }
    
    this.baseStat = function (s) {
        var temp = this.species() + ":" + this.form(); // ignores any :H or :whatever stuff
        if (db.stats(gen, temp)) {
            return db.stats(gen, temp)[s];
        }
        return db.stats(gen, this.species() + ":0")[s]; // this is for keldeo and friends
    }
    
    this.type1 = function() {
        if (this.override) {
            return this.overrideTypes[0];
        }
        if (db.pokeType1(gen, this.species() + ":" + this.form())) {
            return db.pokeType1(gen, this.species() + ":" + this.form());
        }
        return db.pokeType1(gen, this.species() + ":0");
    }
    
    this.type2 = function() {
        if (this.override) {
            return this.overrideTypes[1];
        }
        if (db.pokeType2(gen, this.species() + ":" + this.form())) {
            return db.pokeType2(gen, this.species() + ":" + this.form());
        } else if (db.pokeType2(gen, this.species() + ":0")) {
            return db.pokeType2(gen, this.species() + ":0");
        }
        return Types.CURSE;
    }
    
    this.stab = function (t) {
        return (t === this.type1()
                || t === this.type2()
                || t === this.addedType)
               && t !== Types.CURSE; // no stab on curse-type
    }
    
    this.weight = function() {// kg
        if (db.weight(this.species() + ":" + this.form())) {
            return db.weight(this.species() + ":" + this.form());
        }
        return db.weight(this.species() + ":0");
    }
    
    this.hasEvolution = function() {
        return !!db.evolutions(this.species());
    }
    
    this.possibleGenders = function () {
        if (db.genders(this.species() + this.form())) {
            return db.genders(this.species() + ":" + this.form());
        }
        return db.genders(this.species() + ":0");
    }
    
    this.ability1 = function() { // ui purposes, same for ability2 and ability3
        var aId = db.ability1(this.species() + ":" + this.form());
        if (aId < 0) {
            return db.ability1(this.species() + ":0");
        }
        return aId;
    }
    
    this.ability2 = function() {
        var aId = db.ability2(this.species() + ":" + this.form());
        if (aId < 0) {
            return db.ability2(this.species() + ":0");
        }
        return aId;
    }
    
    this.ability3 = function() {
        var aId = db.ability3(this.species() + ":" + this.form());
        if (aId < 0) {
            return db.ability3(this.species() + ":0");
        }
        return aId;
    }
}

function Move() {
    this.id = "0"; // default (No Move)
    
    this.setName = function (n) {
        for (m in db.moves()) {
            if (db.moves(m) === n) {
                this.id = m;
                return;
            }
        }
    }
    
    this.name = function() {
        return db.moves(this.id);
    }
    
    this.power = function() {
        return db.movePowers(gen, this.id) ? db.movePowers(gen, this.id) : 0;
    }
    
    this.damageClass = function() {
        return db.damageClass(this.id);
    }
    
    this.type = function() {
        return db.moveTypes(gen, this.id) ? db.moveTypes(gen, this.id) : Types.NORMAL;
    }
    
    this.hasRecoil = function() {
        return db.recoil(this.id) ? (db.recoil(this.id) < 0) : false; // negative means it's actually recoil and not recovery
    }
    
    // PO's database uses boolean flags for certain repeated attributes
    
    this.punch = function() {
        return db.moveFlags(this.id) ? !!(db.moveFlags(this.id) & 0x80) : false;
    }
    
    this.sheerForce = function() {
        return db.flinch(this.id) || db.moveEffects(this.id);
    }
    
    this.contact = function() {
        return db.moveFlags(this.id) ? !!(db.moveFlags(this.id) & 0x1) : false;
    }
    
    this.sound = function() {
        return db.moveFlags(this.id) ? !!(db.moveFlags(this.id) & 0x100) : false;
    }
    
    this.powder = function() {
        return db.moveFlags(this.id) ? !!(db.moveFlags(this.id) & 0x8000) : false;
    }
    
    this.bite = function() {
        return db.moveFlags(this.id) ? !!(db.moveFlags(this.id) & 0x4000) : false;
    }
    
    this.pulse = function() {
        return db.moveFlags(this.id) ? !!(db.moveFlags(this.id) & 0x800) : false;
    }
    
    this.ball = function() {
        return db.moveFlags(this.id) ? !!(db.moveFlags(this.id) & 0x10000) : false;
    }
    
    // min and max hits are stored as one byte
    // min hits are the "low nibble", while max hits are the "high nibble"
    this.minHits = function() {
        return db.minMaxHits(gen, this.id) ? db.minMaxHits(gen, this.id) & 0xF : 1;
    }
    
    this.maxHits = function() {
        return db.minMaxHits(gen, this.id) ? (db.minMaxHits(gen, this.id) & 0xF0) >> 4 : 1;
    }
    
    this.multiTargets = function() {
        return db.ranges(gen, this.id) ? (db.ranges(gen, this.id) === 4 || db.ranges(gen, this.id) === 5) : false;
    }
}

function Ability() {
    this.id = "0"; // default (No Ability)
    
    this.setName = function (n) {
        for (a in db.abilities()) {
            if (db.abilities(a) === n) {
                this.id = a;
                return;
            }
        }
    }
    
    this.name = function() {
        return db.abilities(this.id);
    }
    
    this.flagToValue = function (f) {
        if (!db.abilityEffects(this.id)) return null;
        var effectsList = db.abilityEffects(this.id).split("|");
        for (e in effectsList) {
            if (effectsList[e].split("-")[0] === f) {
                return effectsList[e].split("-")[1];
            }
        }
        return null;
    }
    
    this.pinchType = function() {
        var v = this.flagToValue("7");
        return v !== null ? parseInt(v, 10) : -1;
    }
    
    this.weatherSpeedType = function() {
        var v = this.flagToValue("8");
        return v !== null ? parseInt(v, 10) : -1;
    }
    
    this.normalToType = function() {
        var v = this.flagToValue("121");
        return v !== null ? parseInt(v, 10) : -1;
    }
    
    this.immunityType = function() {
        var v = this.flagToValue("70"); // water absorb, volt absorb, etc.
        if (v !== null) {
            return parseInt(v, 10);
        }
        var v = this.flagToValue("38"); // storm drain, lightning rod, etc.
        if (v !== null && gen > 4) { // did damage anyway in gen 4
            return parseInt(v, 10);
        }
        if (db.abilityEffects(this.id) === "120") { // levitate
            return Sulcalc.Types.GROUND;
        }
        if (db.abilityEffects(this.id) === "41") { // motor drive
            return Sulcalc.Types.ELECTRIC;
        }
        var v = this.flagToValue("68"); // sap sipper, etc.
        if (v !== null) {
            return parseInt(v, 10);
        }
        if (db.abilityEffects(this.id) === "19") { // flash fire
            return Sulcalc.Types.FIRE;
        }
        if (db.abilityEffects(this.id) === "15") { // dry skin
            return Sulcalc.Types.Water;
        }
        return -1;
    }
    
    this.ignorable = function() {
        // alphabetize
        var aList = ["Aroma Veil", "Battle Armor", "Big Pecks", "Bulletproof", "Clear Body", "Contrary", "Damp", "Dry Skin",
                     "Filter", "Flash Fire", "Flower Gift", "Flower Veil", "Friend Guard", "Fur Coat", "Heatproof",
                     "Heavy Metal", "Hyper Cutter", "Immunity", "Inner Focus", "Insomnia", "Keen Eye", "Leaf Guard",
                     "Levitate", "Light Metal", "Lightning Rod", "Limber", "Magic Bounce", "Magma Armor", "Marvel Scale",
                     "Motor Drive", "Multiscale", "Oblivious", "Own Tempo", "Sand Veil", "Shell Armor", "Sap Sipper",
                     "Shield Dust", "Simple", "Snow Cloak", "Solid Rock", "Soundproof", "Sticky Hold", "Storm Drain",
                     "Sturdy", "Suction Cups", "Sweet Veil", "Tangled Feet", "Telepathy", "Thick Fat", "Unaware",
                     "Vital Spirit", "Volt Absorb", "Water Absorb", "Water Veil", "White Smoke", "Wonder Guard", "Wonder Skin"];
        return aList.indexOf(this.name()) > -1;
    }
    
    this.moldBreaker = function() {
        // all abilities like mold breaker
        return db.abilityEffects(this.id) === "40";
    }
}

function Item() {
    this.id = 0; // default (No Item)
    
    this.setName = function (n) {
        for (i in db.items()) {
            if (db.items(i) === n) {
                this.id = i;
            }
        }
        for (b in db.berries()) {
            if (db.berries(b) === n) {
                this.id = b + 8000;
                return;
            }
        }
    }
    
    this.name = function() {
        if (db.items(this.id)) {
            return db.items(this.id);
        }
        return db.berries(this.id - 8000);
    }
    
    this.flagToValue = function (f) {
        if (!db.itemEffects(this.id)) return null;
        var effectList = db.itemEffects(this.id).split("|");
        for (e in effectList) {
            if (effectList[e].split("-")[0] === f) {
               return effectList[e].split("-")[1];
            }
        }
        return null;
    }
    
    this.typeBoosted = function() {
        var v = this.flagToValue("10");
        return v !== null ? parseInt(v, 10) : -1;
    }
    
    this.berryType = function() {
        if (this.id < 8000 || !db.berryEffects(this.id - 8000)) return -1; // not a berry
        var e = db.berryEffects(this.id - 8000).split("-");
        if (e[0] === "4") {
            return parseInt(e[1], 10);
        } else if (e[0] === "5") {
            return Types.NORMAL;
        }
        return -1; // ???
    }
    
    this.gemType = function() {
        var v = this.flagToValue("37");
        return v !== null ? parseInt(v, 10) : -1;
    }
    
    this.megaPokeSpecies = function() {
        var v = this.flagToValue("66")
        return v.substring(0, v.indexOf(":"));
    }
    
    this.megaPokeForm = function() {
        var v = this.flagToValue("66");
        return v.substring(v.indexOf(":") + 1);
    }
    
    this.megaPoke = function() {
        return this.flagToValue("66");
    }
    
    this.plateType = function() {
        var v = this.flagToValue("29");
        return v !== null ? parseInt(v, 10) : -1;
    }
}

function Field() {
    this.multiBattle = false;
    this.lightScreen = false;
    this.reflect = false;
    this.friendGuard = false;
    this.critical = false;
    this.weather = Weathers.CLEAR; // CLEAR, SUN, RAIN, SAND, HAIL, HARSH_SUN, HEAVY_RAIN
    this.metronome = 0;
    this.minimize = false;
    this.dig = false;
    this.dive = false;
    this.targetMoved = false; // for payback and friends
    this.attackerDamaged = false; // for avalanche and friends
    this.furyCutter = 0;
    this.echoedVoice = 0;
    this.trumpPP = 5;
    this.roundBoost = false;
    this.fly = false; // if the opponent is flying/bouncing/sky dropping
    this.beatUpStats = [0]; // list of pokemon's attack stats, I leave that to you TUO
    this.beatUpHit = 0; // do not touch
    this.beatUpLevels = [1]; // this is the same length as beatUpStats
    this.stockpile = 0; // for spit up, 0-3
    this.switchOut = false; // did the opponent switch out? (for pursuit)
    this.present = 40; // assuming damage it's either 40, 80, or 120. lol present
    this.magnitude = 4; // magnitude 4, 5, 6, 7, 8, 9, 10
    this.rollout = 0; // 0-5, shared by ice ball
    this.defenseCurl = 0; // 0 or 1
    this.tripleKickCount = 1; // which hit is it? 1, 2, 3? Don't touch
    this.previouslyFainted = false; // for retaliate
    this.fusionBolt = false; // fusion bolt was used previously
    this.fusionFlare = false; // fusion flare was used previously
    this.meFirst = false;
    this.charge = false;
    this.helpingHand = false;
    this.waterSport = false;
    this.mudSport = false;
    this.flashFire = false;
    this.slowStart = false; // less than 5 turns
    this.grassyTerrain = false;
    this.mistyTerrain = false;
    this.electricTerrain = false;
    this.fairyAura = false;
    this.darkAura = false;
    this.auraBreak = false;
    this.plus = false;
    this.minus = false;
    this.airLock = false;
    this.painSplit = false; // was damage due to pain split? this is for avalance and revenge who do not count pain split for the boost
    this.magicRoom = false;
    this.wonderRoom = false;
    this.multiHits = 1; // set this to however many times the move is expected to hit (bullet seed, double slap, etc.)
    this.electrify = false;
    this.ionDeluge = false;
    this.invertedBattle = false; // inverts type matchups if true
    this.pledgeBoost = false;
    this.parentalBond = false; // do not touch
}
    
function hiddenPowerP (ivs) {
    // just a weird formula involving the second bit of the pokemon's IVs
    // differs for gen 2
    return Math.floor((   ((ivs[Stats.HP] & 2) >> 1)
                        | (ivs[Stats.ATK] & 2)
                        | ((ivs[Stats.DEF] & 2) << 1)
                        | ((ivs[Stats.SPD] & 2) << 2)
                        | ((ivs[Stats.SATK] & 2) << 3)
                        | ((ivs[Stats.SDEF] & 2) << 4)
                      ) * 40 / 63 + 30);
}
    
function hiddenPowerT (ivs) {
    // another weird formula involving the first bit (even/odd) of the pokemon's IVs
    // also differs in gen 2
    return 1 + Math.floor(((ivs[Stats.HP] & 1)
                            | ((ivs[Stats.ATK] & 1) << 1)
                            | ((ivs[Stats.DEF] & 1) << 2)
                            | ((ivs[Stats.SPD] & 1) << 3)
                            | ((ivs[Stats.SATK] & 1) << 4)
                            | ((ivs[Stats.SDEF] & 1) << 5)
                          ) * 15 / 63);
}

function hiddenPowerP2 (ivs) {
    // gen 2 gets weirder
    return 31 + ((5 * ((ivs[3] >> 3)
                       | ((ivs[5] >> 2) & 2)
                       | ((ivs[2] >> 1) & 4)
                       | (ivs[1] & 8))
                      + (ivs[3] & 3)
                 ) >> 1);
}
    
function hiddenPowerT2 (ivs) {
    // still weird
    return 1 + (((ivs[1] & 3) << 2) | (ivs[2] & 3));
}

function Calculator() {
    this.move = new Move();
    this.attacker = new Pokemon();
    this.defender = new Pokemon();
    this.field = new Field();
    
    this.typeEffectiveness = function (aType, dType) {
        // 0:immune, 1:resisted, 2:neutral, 4:super effective
        return db.typesTable(gen, aType, dType);
    }

    this.effective = function (aTypes, dTypes, foresight, freezeDry) {
        var e = 1;
        for (d in dTypes) {
            if (freezeDry && dTypes[d] === Types.WATER) {
                // *2 for each attacking type (aType) and one more *2 since freeze-dry is always 2x effective on water
                e <<= aTypes.length + 1;
            } else for (a in aTypes) {
                if (foresight && (aTypes[a] === Types.FIGHTING || aTypes[a] === Types.NORMAL) && dTypes[d]===Types.GHOST) {
                    e *= 2;
                } else {
                    e *= this.typeEffectiveness(aTypes[a], dTypes[d]);
                }
            }
        }
        return e;
    }
    
    this.invert = function (e) {
        /*
         * Immunity becomes Super Effective (2x)
         * Not Very Effective becomes Super Effective (2x)
         * Neutral stays Neutral (1x)
         * Super Effective becomes Not Very Effective (0.5x)
         */
        if (e <= 1) {
            return 4;
        } else if (e === 4) {
            return 1;
        }
        return 2;
    }

    this.invertedEffective = function (aTypes, dTypes, freezeDry) { // foresight has no effect, freeze dry still works
        var e = 1;
        for (d in dTypes) {
            if (freezeDry && dTypes[d] === Types.WATER) {
                e <<= aTypes.length + 1;
            } else for (a in aTypes) {
                e *= this.invert(this.typeEffectiveness(aTypes[a], dTypes[d]));
            }
        }
        return e;
    }
    
    this.chainMod = function (m1, m2) {
        // basically a weird way more or less of combining two multipliers
        // +0x800 is +2048
        // 2048 is 1/2 4096 so it's basically translated as 0.5 which gets rounded off
        // unless (m1*m2)%4096 >= 2048 in which case it will be rounded up
        // essentially it's just multiplying them together and keeping the numerator in 1 byte
        // (m1 * m2)
        return (m1 * m2 + 0x800) >> 12;
        // tl;dr it's an overly complicated way of rounding half-up that keeps the result from overflowing
    }
    
    this.applyMod = function (m, d) {
        // there's weird rounding, <= is accurate. It's rounding half-down. Happens a lot in gen 5 (possibly 6)
        var temp = d * m / 0x1000;
        if (temp - Math.floor(temp) <= .5) {
            return Math.floor(temp);
        } else {
            return Math.ceil(temp);
        }
    }
    
    this.applyModA = function (m, s) {
        // just use applyMod on an array to prevent redundant/error-prone code
        for (var i = 0; i < s.length; i++) {
            s[i] = this.applyMod(m, s[i]);
        }
        return s;
    }
    
    this.flail = function (currentHealth, totalHealth) {
        var p = Math.floor(48 * currentHealth / totalHealth);
        if (p <= 1) {
            return 200
        } else if (p <= 4) {
            return 150;
        } else if (p <= 9) {
            return 100;
        } else if (p <= 16) {
            return 80;
        } else if (p <= 32) {
            return 40;
        }
        return 20;
    }
    
    this.magnitudePower = function (mag) {
        var pows = [10, 30, 50, 70, 90, 110, 150];
        return pows[mag - 4];
    }
    
    this.weatherBall = function (w) {
        if ([Weathers.SUN, Weathers.HARSH_SUN].indexOf(w) > -1) {
            return Types.FIRE;
        } else if ([Weathers.RAIN, Weathers.HEAVY_RAIN].indexOf(w) > -1) {
            return Types.WATER;
        } else if (w === Weathers.SAND) {
            return Types.ROCK;
        } else if (w === Weathers.HAIL) {
            return Types.ICE;
        }
        return Types.NORMAL;
    }
    
    this.trumpPower = function (pp) {
        var t = [200, 80, 60, 50, 40];
        return t[Math.min(4, pp)];
    }
    
    this.electroBall = function (a, b) {
        var s = a / Math.max(1, b);
        if (s >= 4) {
            return 150;
        } else if (s >= 3) {
            return 120;
        } else if (s >= 2) {
            return 80;
        } else if (s >= 1) {
            return 60;
        }
        return 40;
    }
    
    this.gyroBall = function (a, b) {
        return Math.min(150, 1 + Math.floor(25 * b / Math.max(1, a)));
    }
    
    this.punishment = function (a) {
        var statBoostTotal = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i] > 0) {
                statBoostTotal += a[i];
            }
        }
        return Math.min(120, 60 + 20 * statBoostTotal);
    }
    
    this.grassKnot = function (w) { // w in kg * 10
        if (w >= 2000) {
            return 120;
        } else if (w >= 1000) {
            return 100;
        } else if (w >= 500) {
            return 80;
        } else if (w >= 250) {
            return 60;
        } else if (w >= 100) {
            return 40;
        }
        return 20;
    }
    
    this.heavySlam = function (w1, w2) {
        var w = Math.floor(w1 / w2);
        if (w >= 5) {
            return 120;
        } else if (w === 4) {
            return 100;
        } else if (w === 3) {
            return 80;
        } else if (w === 2) {
            return 60;
        }
        return 40;
    }
    
    this.storedPower = function (b) {
        var statBoostTotal = 1;
        for (var i = 1; i < b.length; i++) {
            if (b[i] > 0) {
                statBoostTotal += b[i];
            }
        }
        return 20 * statBoostTotal;
    }
    
    this.oras_calculate = function() {
        var moveType = this.move.type();
        var movePower = this.move.power();
        var atk = 0, def = 0, satk = 0, sdef = 0;
        var attackerWeight = this.attacker.weight() * 10;
        var defenderWeight = this.defender.weight() * 10;
        var attackerAbility = new Ability();
        attackerAbility.id = this.attacker.ability.id;
        var defenderAbility = new Ability();
        defenderAbility.id = this.defender.ability.id;
        if (attackerAbility.moldBreaker() && defenderAbility.ignorable()) {
            defenderAbility.id = "0";
        }
        if (this.move.sound() && defenderAbility.name() === "Soundproof"
            || this.move.ball() && defenderAbility.name() === "Bulletproof") {
            return [0];
        }
        var attackerItem = new Item();
        attackerItem.id = (this.field.magicRoom || attackerAbility.name() === "Klutz" || this.attackerItemUsed) ? 0 : this.attacker.item.id;
        var defenderItem = new Item();
        defenderItem.id = (this.field.magicRoom || defenderAbility.name() === "Klutz" || this.defenderItemUsed) ? 0 : this.defender.item.id;
        var aAbilityName = attackerAbility.name();
        var dAbilityName = defenderAbility.name();
        var weather = this.field.airLock ? Weathers.CLEAR : this.field.weather;
        var crit = this.field.critical;
        var attackerSpeed = this.attacker.boostedStat(Stats.SPD);
        var defenderSpeed = this.defender.boostedStat(Stats.SPD);
        if (([weather === Weathers.RAIN, Weathers.HEAVY_RAIN].indexOf(weather) > -1 && aAbilityName === "Swift Swim")
            || ([weather === Weathers.SUN, Weathers.HARSH_SUN].indexOf(weather) > -1 && aAbilityName === "Chlorophyll")) {
            attackerSpeed *= 2;
        }
        if (([weather === Weathers.RAIN, Weathers.HEAVY_RAIN].indexOf(weather) > -1 && dAbilityName === "Swift Swim")
            || ([weather === Weathers.SUN, Weathers.HARSH_SUN].indexOf(weather) > -1 && dAbilityName === "Chlorophyll")) {
            defenderSpeed *= 2;
        }
        var aItemName = attackerItem.name();
        var dItemName = defenderItem.name();
        var aItemName2 = this.attacker.item.name();
        var dItemName2 = this.defender.item.name();
        if (["Iron Ball", "Macho Brace", "Power Bracer", "Power Belt", "Power Lens", "Power Band", "Power Anklet", "Power Weight"].indexOf(aItemName2) > -1) {
            attackerSpeed >>= 1;
        }
        if (["Iron Ball", "Macho Brace", "Power Bracer", "Power Belt", "Power Lens", "Power Band", "Power Anklet", "Power Weight"].indexOf(dItemName2) > -1) {
            defenderSpeed >>= 1;
        }
        if (aItemName === "Choice Scarf") {
            attackerSpeed = (attackerSpeed * 3) >> 1;
        }
        if (dItemName === "Choice Scarf") {
            defenderSpeed = (defenderSpeed * 3) >> 1;
        }
        if (aItemName === "Quick Powder" && this.attacker.name() === "Ditto") {
            attackerSpeed *= 2;
        }
        if (dItemName === "Quick Powder" && this.defender.name() === "Ditto") {
            defenderSpeed *= 2;
        }
        if (aAbilityName === "Quick Feet" && this.attacker.status !== Statuses.NOSTATUS) {
            attackerSpeed = (attackerSpeed * 3) >> 1;
        } else if (this.attacker.status === Statuses.PARALYZED) {
            attackerSpeed >>= 2;
        }
        if (dAbilityName === "Quick Feet" && this.defender.status !== Statuses.NOSTATUS) {
            defenderSpeed = (defenderSpeed * 3) >> 1;
        } else if (this.defender.status === Statuses.PARALYZED) {
            defenderSpeed >>= 2;
        }
        if (aAbilityName === "Slow Start" && this.field.slowStart) {
            attackerSpeed >>= 1;
        }
        if (this.attacker.item.id === "0" && aAbilityName === "Unburden" && this.attacker.unburden) {
            attackerSpeed *= 2;
        }
        if (this.defender.item.id === "0" && dAbilityName === "Unburden" && this.defender.unburden) {
            defenderSpeed *= 2;
        }
        if (this.attacker.tailwind) {
            attackerSpeed *= 2;
        }
        if (this.defender.tailwind) {
            defenderSpeed *= 2;
        }

        if (this.attacker.autotomize) {
            attackerWeight -= 1000;
        }
        if (aAbilityName === "Light Metal") {
            attackerWeight /= 2;
        } else if (aAbilityName === "Heavy Metal") {
            attackerWeight *= 2;
        }
        if (aItemName === "Float Stone") {
            attackerWeight /= 2;
        }
        attackerWeight = Math.max(1, attackerWeight - Math.floor(attackerWeight) > 0.5 ? 1 + Math.floor(attackerWeight) : Math.floor(attackerWeight));
        
        if (this.defender.autotomize) {
            defenderWeight -= 1000;
        }
        if (dAbilityName === "Light Metal") {
            defenderWeight /= 2;
        } else if (dAbilityName === "Heavy Metal") {
            defenderWeight *= 2;
        }
        if (dItemName === "Float Stone") {
            defenderWeight /= 2;
        }
        defenderWeight = Math.max(1, defenderWeight - Math.floor(defenderWeight) > 0.5 ? 1 + Math.floor(defenderWeight) : Math.floor(defenderWeight));
        
        var moveName = this.move.name();
        if (["Seismic Toss", "Night Shade"].indexOf(moveName) > -1) {
            return [this.attacker.level];
        } else if (moveName === "Dragon Rage") {
            return [40];
        } else if (moveName === "Sonic Boom") {
            return [20];
        } else if (["Guillotine", "Horn Drill", "Fissure", "Sheer Cold"].indexOf(moveName) > -1) {
            return [this.defender.stat(Stats.HP)];
        } else if (moveName === "Endeavor") {
            return [this.attacker.currentHP >= this.defender.currentHP ? 0 : this.defender.currentHP-this.attacker.currentHP];
        } else if (moveName === "Psywave") {
            var range = [];
            for (var i = 0; i <= 100; i++) {
                range[i] = Math.max(1, Math.floor(this.attacker.level * (i + 50) / 100))
            }
            return range;
        } else if (moveName === "Super Fang") {
            return [Math.max(1, this.defender.currentHP >> 1)];
        } else if (moveName === "Weather Ball") {
            moveType = this.weatherBall(weather);
            movePower = moveType === Types.NORMAL ? 50 : 100;
        } else if (moveName === "Frustration") {
            movePower = Math.max(1,Math.floor((255 - this.attacker.happiness) * 10 / 25));
        } else if (moveName === "Return") {
            movePower = Math.max(1, Math.floor(this.attacker.happiness * 10 / 25));
        } else if (moveName === "Payback" && this.field.targetMoved) {
            movePower *= 2;
        } else if (moveName === "Electro Ball") {
            movePower = this.electroBall(attackerSpeed, defenderSpeed);
        } else if (((moveName === "Avalanche" && !this.field.painSplit) || (moveName === "Revenge" && !this.field.painSplit) || moveName === "Assurance") && this.field.attackerDamaged) {
            movePower *= 2;
        } else if (moveName === "Gyro Ball") {
            movePower = this.gyroBall(attackerSpeed, defenderSpeed);
        } else if (["Water Spout", "Eruption"].indexOf(moveName) > -1) {
            movePower = Math.max(1, Math.floor(150 * this.attacker.currentHP / this.attacker.stat(Stats.HP)));
        } else if (moveName === "Punishment") {
            movePower = this.punishment(this.defender.boosts);
        } else if (moveName === "Fury Cutter") {
            movePower = Math.min(160, 40 << this.field.furyCutter);
        } else if (["Low Kick", "Grass Knot"].indexOf(moveName) > -1) {
            movePower = this.grassKnot(defenderWeight);
        } else if (moveName === "Echoed Voice") {
            movePower = Math.min(200, 40 + 40 * field.echoedVoice);
        } else if (moveName === "Hex" && this.defender.status !== Statuses.NOSTATUS) {
            movePower *= 2;
        } else if (["Wring Out", "Crush Grip"].indexOf(moveName) > -1) {
            var r = 120 * defender.currentHP / defender.getStat(Stats.HP);
            r = (r - Math.floor(r) > 0.5) ? 1 + Math.floor(r) : Math.floor(r);
            movePower = Math.max(1, r);
        } else if (["Heavy Slam", "Heat Crash"].indexOf(moveName) > -1) {
            movePower = this.heavySlam(attackerWeight, defenderWeight);
        } else if (moveName === "Stored Power") {
            movePower = this.storedPower(this.attacker.boosts);
        } else if (["Flail", "Reversal"].indexOf(moveName) > -1) {
            movePower = this.flail(this.attacker.currentHP, this.attacker.stat(Stats.HP));
        } else if (moveName === "Trump Card") {
            movePower = this.trumpPower(this.field.trumpPP);
        } else if (moveName === "Round" && this.field.roundBoost) {
            movePower *= 2;
        } else if (moveName === "Wake-Up Slap" && this.defender.status === Statuses.ASLEEP) {
            movePower *= 2;
        } else if (moveName === "Smelling Salts" && this.defender.status === Statuses.PARALYZED) {
            movePower *= 2;
        } else if (["Twister", "Gust"].indexOf(moveName) > -1 && this.field.fly) {
            movePower *= 2;
        } else if (moveName === "Beat Up") {
            movePower = Math.floor(this.field.beatUpStats[this.field.beatUpHit]/10)+5;
        } else if (moveName === "Hidden Power") {
            moveType = hiddenPowerT(this.attacker.ivs);
        } else if (moveName === "Spit Up") {
            movePower = 100*this.field.stockpile;
        } else if (moveName === "Pursuit" && this.field.switchOut) {
            movePower *= 2;
        } else if (moveName === "Present") {
            movePower = this.field.present;
        } else if (moveName === "Natural Gift" && attackerItem.id >= 8000) {
            movePower = db.berryPower(atackerItem.id - 8000);
            moveType = db.berryType(atackerItem.id - 8000);
        } else if (moveName === "Magnitude") {
            movePower = this.magnitudePower(this.field.magnitude);
        } else if (["Rollout", "Ice Ball"].indexOf(moveName) > -1) {
            movePower = 30 << (this.field.rollout%5 + this.field.defenseCurl);
        } else if (moveName === "Fling") {
            movePower = db.flingPower(attackerItem.id);
        } else if (["Fire Pledge", "Grass Pledge", "Water Pledge"].indexOf(moveName) > -1 && this.field.pledgeBoost) {
            movePower *= 2; /*
                             * I'm assuming smogon is wrong here,
                             * fuzzy pointed out that stab is applied,
                             * so in past gens it'd have been 50*2*1.5
                             * They probably plugged in a value to test
                             * the BP and forgot STAB /ramble
                             */
        } else if (moveName === "Triple Kick") {
            movePower = 10 * this.field.tripleKickCount;
        } else if (["Self-Destruct", "Explosion"].indexOf(moveName) > -1 && defenderAbility.name() === "Damp") {
            return [0];
        } else if (moveName === "Final Gambit") {
            return [this.attacker.currentHP];
        } else if (moveName === "Judgment" && this.attacker.item.plateType() !== -1) {
            moveType = this.attacker.item.plateType();
        }
        var gemBoost;
        if (moveType === attackerItem.gemType()) {
            attackerItem.id = 0;
            this.attackerItemUsed = true;
            gemBoost = true;
        }
        if (moveName === "Acrobatics") {
            if (attackerItem.id === 0) { // gems are "used" earlier in calc and item set to 0
                movePower *= 2;
            }
        }
        
        var movePowerMod = 0x1000;
        if (aAbilityName === "Technician" && movePower <= 60) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        } else if (aAbilityName === "Flare Boost" && this.attacker.status === Statuses.BURNED && this.move.damageClass() === DamageClasses.SPECIAL) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        } else if (aAbilityName === "Analytic" && this.field.targetMoved) {
            movePowerMod = this.chainMod(0x14CD, movePowerMod);
        } else if (aAbilityName === "Reckless" && (moveName === "Jump Kick" || moveName === "High Jump Kick" || this.move.hasRecoil())) {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        } else if (aAbilityName === "Iron Fist" && this.move.punch()) {
            movePowerMod = this.chainMod(0x1333, movePowerMod)
        } else if (aAbilityName === "Toxic Boost" && (this.attacker.status === Statuses.POISONED || this.attacker.status === Statuses.BADLYPOISONED) && this.move.damageClass() === DamageClasses.PHYSICAL) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        } else if (aAbilityName === "Rivalry") {
            if (this.attacker.gender !== this.defender.gender && this.attacker.gender !== Genders.NOGENDER) {
                movePowerMod = this.chainMod(0x1400, movePowerMod);
            } else if (this.attacker.gender === this.defender.gender && this.attacker.gender !== Genders.NOGENDER) {
                movePowerMod = this.chainMod(0xC00, movePowerMod);
            }
        } else if (aAbilityName === "Sand Force" && weather === Weathers.SAND && (moveType === Types.GROUND || moveType === Types.ROCK || moveType === Types.STEEL)) {
            movePowerMod = this.chainMod(0x14CD, movePowerMod)
        } else if (moveType === Types.NORMAL && attackerAbility.normalToType() !== -1) { // refrigerate, etc
            movePowerMod = this.chainMod(0x14CD, movePowerMod);
            moveType = attackerAbility.normalToType();
        } else if (aAbilityName === "Normalize") {
            moveType = Types.NORMAL;
        } else if (aAbilityName === "Tough Claws" && this.move.contact()) {
            movePowerMod = this.chainMod(0x1555, movePowerMod);
        } else if (aAbilityName === "Strong Jaw" && this.move.bite()) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        } else if (aAbilityName === "Mega Launcher" && this.move.pulse()) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        } else if (aAbilityName === "Parental Bond" && this.field.parentalBond) {
            movePowerMod = this.chainMod(0x800, movePowerMod); // also probably where this goes
        }
        if (dAbilityName === "Heatproof" && moveType === Types.FIRE) {
            movePowerMod = this.chainMod(0x800, movePowerMod);
        } else if (dAbilityName === "Dry Skin" && moveType === Types.FIRE) {
            movePowerMod = this.chainMod(0x1400, movePowerMod);
        } else if (aAbilityName === "Sheer Force" && this.move.sheerForce()) {
            movePowerMod = this.chainMod(0x14CD, movePowerMod);
        }
        if (attackerItem.typeBoosted() === moveType) {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        } else if (aItemName === "Muscle Band" && this.move.damageClass() === DamageClasses.PHYSICAL) {
            movePowerMod = this.chainMod(0x1199, movePowerMod);
        } else if (aItemName === "Lustrous Orb" && (moveType === 10 || moveType === 15) && this.attacker.name() === "Palkia") {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        } else if (aItemName === "Wise Glasses" && this.move.damageClass() === DamageClasses.SPECIAL) {
            movePowerMod = this.chainMod(0x1199, movePowerMod);
        } else if (aItemName === "Griseous Orb" && (moveType === 7 || moveType === 15) && this.attacker.name() === "Giratina-O") {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        } else if (gemBoost) {
            movePowerMod = this.chainMod(0x14CD, movePowerMod);
        } else if (aItemName === "Adamant Orb" && (moveType === 8 || moveType === 15) && this.attacker.name() === "Dialga") {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        }
        if (moveName === "Facade" && this.attacker.status !== Statuses.NOSTATUS) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        } else if (moveName === "Brine" && this.defender.currentHP * 2 <= this.defender.stat(Stats.HP)) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        } else if (moveName === "Venoshock" && (this.attacker.status === Statuses.POISONED || this.attacker.status === Statuses.BADLYPOISONED)) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        } else if (moveName === "Retaliate" && this.field.previouslyFainted) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        } else if ((moveName === "Fusion Bolt" && this.field.fusionFlare) || (moveName === "Fusion Flare" && this.field.fusionBolt)) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if (this.field.meFirst) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (moveName === "Solar Beam" && [Weathers.SUN, Weathers.HARSH_SUN, Weathers.CLEAR].indexOf(weather) < 0) {
            movePowerMod = this.chainMod(0x800, movePowerMod);
        }
        if (moveName === "Knock Off"
            && this.defender.item.megaPoke() === null
            && this.defender.item.name() !== "(No Item)"
            && !(this.defender.item.name() === "Griseous Orb" && this.defender.name().indexOf("Giratina") > -1)
            && !(this.defender.item.name().indexOf(" Drive") !== -1 && this.defender.name().indexOf("Genesect") > -1)
            && !(dAbilityName === "Multitype" && this.defender.item.name().indexOf(" Plate") > -1)) {
            movePowerMod = this.chainMod(0x1800, movePowerMod); // most likely it goes here, idk
            this.defenderItemUsed = true;
        }
        if (this.field.charge && moveType === Types.ELECTRIC) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if (this.field.helpingHand) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (this.field.waterSport && moveType === Types.FIRE) {
            movePowerMod = this.chainMod(0x548, movePowerMod);
        }
        if (this.field.mudSport && moveType === Types.ELECTRIC) {
            movePowerMod = this.chainMod(0x548, movePowerMod);
        }
        if (moveType === Types.GRASS && this.field.grassyTerrain && this.attacker.grounded) { // both described as 50% move boost, unconfirmed
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (moveType === Types.ELECTRIC && this.field.electricTerrain && this.attacker.grounded) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if ((this.field.ionDeluge && moveType === Types.NORMAL) || this.field.electrify) {
            moveType = Types.ELECTRIC;
        }
        movePower = Math.max(1, this.applyMod(movePowerMod, movePower));
        
        var _def = this.field.wonderRoom ? Stats.SDEF : Stats.DEF;
        var _sdef = this.field.wonderRoom ? Stats.DEF : Stats.SDEF;
        var unawareA = aAbilityName === "Unaware";
        var unawareD = dAbilityName === "Unaware";
        if (this.move.name() === "Foul Play") {
            if (unawareA) {
                def = this.defender.stat(_def);
                sdef = this.defender.stat(_sdef);
                atk = this.defender.stat(Stats.ATK);
            } else {
                def = crit ? Math.min(this.defender.stat(_def), this.defender.boostedStat(_def))
                           : this.defender.boostedStat(_def);
                sdef = crit ? Math.min(this.defender.stat(_sdef), this.defender.boostedStat(_sdef))
                            : this.defender.boostedStat(_sdef);
                atk = crit ? Math.max(this.defender.stat(Stats.ATK), this.defender.boostedStat(Stats.ATK))
                           : this.defender.boostedStat(Stats.ATK);
            }
            if (unawareD) {
                satk = this.attacker.stat(Stats.SATK);
            } else {
                satk = crit ? Math.max(this.attacker.stat(Stats.SATK), this.attacker.boostedStat(Stats.SATK))
                            : this.attacker.boostedStat(Stats.SATK);
            }
        } else if (moveName === "Chip Away" || moveName === "Sacred Sword") {
            def = this.defender.stat(_def);
            sdef = this.defender.stat(_sdef);
            if (unawareD) {
                atk = this.attacker.stat(Stats.ATK);
                satk = this.attacker.stat(Stats.SATK);
            } else {
                atk = crit ? Math.max(this.attacker.stat(Stats.ATK), this.attacker.boostedStat(Stats.ATK))
                           : this.attacker.boostedStat(Stats.ATK);
                satk = crit ? Math.max(this.attacker.stat(Stats.SATK), this.attacker.boostedStat(Stats.SATK))
                            : this.attacker.boostedStat(Stats.SATK);
            }
        } else {
            if (unawareA) {
                def = this.defender.stat(_def);
                sdef = this.defender.stat(_sdef);
            } else {
                def = crit ? Math.min(this.defender.stat(_def), this.defender.boostedStat(_def)) : this.defender.boostedStat(_def);
                sdef = crit ? Math.min(this.defender.stat(_sdef), this.defender.boostedStat(_sdef)) : this.defender.boostedStat(_sdef);
            }
            if (unawareD) {
                atk = this.attacker.stat(Stats.ATK);
                satk = this.attacker.stat(Stats.SATK);
            } else {
                atk = crit ? Math.max(this.attacker.stat(Stats.ATK), this.attacker.boostedStat(Stats.ATK)) : this.attacker.boostedStat(Stats.ATK);
                satk = crit ? Math.max(this.attacker.stat(Stats.SATK), this.attacker.boostedStat(Stats.SATK)) : this.attacker.boostedStat(Stats.SATK);
            }
        }
        
        var atkMod = 0x1000, satkMod = 0x1000;
        if (dAbilityName === "Thick Fat" && (moveType === Types.FIRE || moveType === Types.ICE)) {
            atkMod = this.chainMod(0x800, atkMod);
            satkMod = this.chainMod(0x800, satkMod);
        }
        if (attackerAbility.pinchType() === moveType && this.attacker.stat(Stats.HP) >= this.attacker.currentHP * 3) {
            atkMod = this.chainMod(0x1800, atkMod); // blaze, torrent, overgrow, ...
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Guts" && this.attacker.status !== Statuses.NOSTATUS) {
            atkMod = this.chainMod(0x1800, atkMod);
        }
        if ((aAbilityName === "Plus" && this.field.minus) || (aAbilityName === "Minus" && this.field.plus)) {
            atkMod = this.chainMod(0x1800, atkMod);
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Defeatist" && this.attacker.currentHP * 2 <= this.attacker.stat(Stats.HP)) {
            atkMod = this.chainMod(0x800, atkMod);
            satkMod = this.chainMod(0x800, satkMod);
        }
        if (aAbilityName === "Huge Power" || aAbilityName === "Pure Power") {
            atkMod = this.chainMod(0x2000, atkMod);
        }
        if (aAbilityName === "Solar Power" && [Weathers.SUN, Weathers.HARSH_SUN].indexOf(weather) > -1) {
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Hustle") {
            atk = this.applyMod(0x1800, atk);
        }
        if (aAbilityName === "Flash Fire" && this.field.flashFire && moveType === Types.FIRE) {
            atkMod = this.chainMod(0x1800, atkMod);
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Slow Start" && this.field.slowStart) {
            atkMod = this.chainMod(0x800, atkMod);
        }
        if (this.attacker.flowerGift && [Weathers.SUN, Weathers.HARSH_SUN].indexOf(weather) > -1) {
            atkMod = this.chainMod(0x1800, atkMod);
        }
        if (aItemName === "Thick Club" && (this.attacker.name() === "Cubone" || this.attacker.name() === "Marowak")) {
            atkMod = this.chainMod(0x2000, atkMod);
        }
        if (aItemName === "Deep Sea Tooth" && this.attacker.name() === "Clamperl") {
            satkMod = this.chainMod(0x2000, satkMod);
        }
        if (aItemName === "Light Ball" && this.attacker.name() === "Pikachu") {
            atkMod = this.chainMod(0x2000, atkMod);
            satkMod = this.chainMod(0x2000, satkMod);
        }
        if (aItemName === "Soul Dew" && (this.attacker.name() === "Latias" || this.attacker.name() === "Latios")) {
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aItemName === "Choice Band") {
            atkMod = this.chainMod(0x1800, atkMod);
        }
        if (aItemName === "Choice Specs") {
            satkMod = this.chainMod(0x1800, satkMod);
        }
        atk = this.applyMod(atkMod, atk);
        satk = this.applyMod(satkMod, satk);
        
        if (weather === Weathers.SAND && (this.defender.type1() === Types.ROCK || this.defender.type2() === Types.ROCK)) {
            sdef = this.applyMod(0x1800, sdef);
        }
        var defMod = 0x1000, sdefMod = 0x1000;
        if (dAbilityName === "Marvel Scale" && this.defender.status !== Statuses.NOSTATUS) {
            defMod = this.chainMod(0x1800, defMod);
        }
        if (dAbilityName === "Grass Pelt" && this.field.grassyTerrain) { // unconfirmed
            defMod = this.chainMod(0x1800, defMod);
        }
        if (this.defender.flowerGift && [Weathers.SUN, Weathers.HARSH_SUN].indexOf(weather) > -1) {
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        if (dItemName === "Deep Sea Scale" && this.defender.name() === "Clamperl") {
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        if (dItemName === "Metal Powder" && this.defender.name() === "Ditto") {
            defMod = this.chainMod(0x2000, defMod);
        }
        if (dItemName === "Eviolite" && this.defender.hasEvolution()) {
            defMod = this.chainMod(0x1800, defMod);
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        if (dItemName === "Soul Dew" && (this.defender.name() === "Latias" || this.defender.name() === "Latios")) {
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        if (dItemName === "Assault Vest") {
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        def = this.applyMod(defMod, def);
        sdef = this.applyMod(sdefMod, sdef);
        
        var a = 0, d = 0;
        if (["Psyshock", "Psystrike", "Secret Sword"].indexOf(moveName) > -1) {
            a = satk;
            d = def;
        } else if (this.move.damageClass() === DamageClasses.PHYSICAL) {
            a = atk;
            d = def;
        } else if (this.move.damageClass() === DamageClasses.SPECIAL) {
            a = satk;
            d = sdef;
        } else {
            return [0];
        }
        
        var baseDamage = Math.floor(Math.floor((Math.floor(2 * this.attacker.level / 5) + 2) * movePower * a / d) / 50) + 2;

        if (this.field.multiBattle && this.move.multiTargets()) {
            baseDamage = this.applyMod(0xC00, baseDamage);
        }

        if (weather === Weathers.SUN) {
            if (moveType === Types.FIRE) {
                baseDamage = this.applyMod(0x1800, baseDamage);
            } else if (moveType === Types.WATER) {
                baseDamage = this.applyMod(0x800, baseDamage);
            }
        } else if (weather === Weathers.RAIN) {
            if (moveType === Types.WATER) {
                baseDamage = this.applyMod(0x1800, baseDamage);
            } else if (moveType === Types.FIRE) {
                baseDamage = this.applyMod(0x800, baseDamage);
            }
        } else if (weather === Weathers.HARSH_SUN) {
            if (moveType === Types.WATER) {
                return [0];
            } else if (moveType === Types.FIRE) {
                baseDamage = this.applyMod(0x800, baseDamage);
            }
        } else if (weather === Weathers.HEAVY_RAIN) {
            if (moveType === Types.WATER) {
                baseDamage = this.applyMod(0x1800, baseDamage);
            } else if (moveType === Types.FIRE) {
                return [0];
            }
        } else if (weather === Weathers.STRONG_WINDS
                   && this.typeEffectiveness(moveType, Types.FLYING)
                   && [this.defender.type1(), this.defender.type2()].indexOf(Types.FLYING) > -1) {
            baseDamage = this.applyMod(0x800, baseDamage);
        }

        if (crit) { // I'm guessing this is how GameFreak does it, although I believe x1.5 round down has the same effect anyway
            baseDamage = this.applyMod(0x1800, baseDamage);
        }

        // now we diverge into the randomization, wheeee
        var damages = [];
        for (var i=0; i<16; i++) {
            damages[i] = Math.floor(baseDamage * (85 + i) / 100);
        }
        if (this.attacker.stab(moveType) || aAbilityName === "Protean") {
            if (aAbilityName === "Adaptability") {
                damages = this.applyModA(0x2000, damages);
            } else {
                damages = this.applyModA(0x1800, damages);
            }
        }

        var attackTypes = [moveType, moveName === "Flying Press" ? Types.FLYING : Types.CURSE];
        var eff = 0;
        if (this.field.invertedBattle) {
            eff = this.invertedEffective(attackTypes,
                                         [this.defender.type1(), this.defender.type2(), this.defender.addedType],
                                         moveName === "Freeze-Dry");
        } else {
            eff = this.effective(attackTypes,
                                 [this.defender.type1(), this.defender.type2(), this.defender.addedType],
                                 this.field.foresight || attackerAbility.name() === "Scrappy",
                                 moveName === "Freeze-Dry");
        }
        if (eff === 0 || attackTypes.indexOf(defenderAbility.immunityType()) > -1) {
            return [0];
        }

        for (var i = 0; i < damages.length; i++) {
            damages[i] = (damages[i] * eff) >> 6;
        }

        if (this.attacker.status === Statuses.BURNED && this.move.damageClass() === DamageClasses.PHYSICAL && aAbilityName !== "Guts" && moveName !== "Facade") {
            for (var i = 0; i < damages.length; i++) {
                damages[i] = damages[i] >> 1;
            }
        }

        for (var i = 0; i < damages.length; i++) {// ensure one damage
            damages[i] = Math.max(1, damages[i]);
        }

        var finalMod = 0x1000;
        if (this.field.reflect && !crit
                               && (this.move.damageClass() === DamageClasses.PHYSICAL
                                   || ["Psyshock", "Psystrike", "Secret Sword"].indexOf(moveName) > -1)
                               && aAbilityName !== "Infiltrator") {
            finalMod = this.chainMod(this.field.multiBattle ? 0xA8F : 0x800, finalMod);
        } else if (this.field.lightScreen && !crit
                                          && ["Psyshock", "Psystrike", "Secret Sword"].indexOf(moveName) < 0
                                          && aAbilityName !== "Infiltrator") {
            finalMod = this.chainMod(this.field.multiBattle ? 0xA8F : 0x800, finalMod);
        }
        if (dAbilityName === "Multiscale" && this.defender.currentHP === this.defender.stat(Stats.HP)) {
            finalMod = this.chainMod(0x800, finalMod);
        }
        if (aAbilityName === "Tinted Lens" && eff < 64) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        if (this.field.friendGuard) {
            finalMod = this.chainMod(0xC00, finalMod);
        }
        if (aAbilityName === "Sniper" && crit) {
            finalMod = this.chainMod(0x1800, finalMod);
        }
        if ((dAbilityName === "Filter" || dAbilityName === "Solid Rock") && eff > 64) {
            finalMod = this.chainMod(0xC00, finalMod);
        }
        if (aItemName === "Metronome") {
            finalMod = this.chainMod(this.field.metronome <= 4 ? (0x1000 + this.field.metronome * 0x333) : 0x2000, finalMod);
        }
        if (aItemName === "Expert Belt" && eff > 64) {
            finalMod = this.chainMod(0x1333, finalMod);
        }
        if (aItemName === "Life Orb") {
            finalMod = this.chainMod(0x14CC, finalMod);
        }
        if (defenderItem.berryType() === moveType && (eff > 64 || moveType === Types.NORMAL)) {
            finalMod = this.chainMod(0x800, finalMod);
            this.defenderItemUsed = true;
        }
        if (this.field.minimize && ["Body Slam", "Dragon Rush", "Flying Press",
                                    "Phantom Force", "Steamroller", "Stomp"].indexOf(moveName) > -1) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        if (this.field.dig && (moveName === "Earthquake" || moveName === "Magnitude")) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        if (this.field.dive && (moveName === "Surf" || moveName === "Whirlpool")) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        if (this.field.mistyTerrain && this.defender.grounded) { // unconfirmed
            finalMod = this.chainMod(0x800, finalMod); // it says that it "divides damage" by half, not attack
        }
        if (dAbilityName === "Fur Coat") { // unconfirmed
            finalMod = this.chainMod(0x800, finalMod);
        }
        if ((this.field.fairyAura && moveType === Types.FAIRY) || (this.field.darkAura && moveType === Types.DARK)) {
            if (this.field.auraBreak) {
                finalMod = this.chainMod(0xAAA, finalMod);
            } else {
                finalMod = this.chainMod(0x1555, finalMod);
            }
        }
        this.applyModA(finalMod, damages);
        
        if (dAbilityName === "Sturdy" && this.defender.currentHP === this.defender.stat(Stats.HP)) {
            for (var i = 0; i < damages.length; i++) {
                damages[i] = Math.min(damages[i], this.defender.stat(Stats.HP) - 1);
            }
        }
        
        return damages;
    }
    
    this.rby_calculate = function() {
        // massive shoutout to Crystal_ for verifying the RBY/GSC mechanics for me
        var moveName = this.move.name();
        if (moveName === "Seismic Toss" || moveName === "Night Shade") {
            return [this.attacker.level];
        } else if (moveName === "Dragon Rage") {
            return [40];
        } else if (moveName === "Sonic Boom") {
            return [20];
        } else if (["Guillotine", "Horn Drill", "Fissure"].indexOf(moveName) > -1) {
            return [65535];
        } else if (moveName === "Psywave") {
            var range = [];
            for (var i = 1; i <= Math.floor(this.attacker.level*3/2-1); i++) {
                range[i-1] = i;
            }
            return range;
        } else if (moveName === "Super Fang") {
            return [Math.max(1, this.defender.currentHP >> 1)];
        }
        var lvl, atk, def, spc_a, spc_d;
        if (this.field.critical) {
            lvl = this.attacker.level * 2;
            atk = this.attacker.stat(Stats.ATK);
            def = this.defender.stat(Stats.DEF);
            spc_a = this.attacker.stat(Stats.SPC);
            spc_d = this.defender.stat(Stats.SPC);
        } else {
            lvl = this.attacker.level;
            atk = Math.min(999, this.attacker.boostedStat(Stats.ATK) >> (this.attacker.status === Statuses.BURNED ? 1 : 0));
            def = Math.min(999, this.defender.boostedStat(Stats.DEF));
            spc_a = Math.min(999, this.attacker.boostedStat(Stats.SPC));
            spc_d = Math.min(999, this.defender.boostedStat(Stats.SPC));
        }
        if (this.field.reflect && !this.field.critical) {
            def *= 2;
        }
        if (this.field.lightScreen && !this.field.critical) {
            spc_d *= 2;
        }
        if (moveName === "Explosion" || moveName === "Self-Destruct") {
            def >>= 1;
        }
        
        var a, d;
        if (db.typeDamageClass(this.move.type()) === DamageClasses.PHYSICAL) {
            a = atk;
            d = def;
        } else if (db.typeDamageClass(this.move.type()) === DamageClasses.SPECIAL) {
            a = spc_a;
            d = spc_d;
        } else {
            return [0];
        }
        
        if ((a > 255) || (d > 255)) { // is attack or defense greater than 255?
            a = (a >> 2) & 0xFF;
            d = (d >> 2) & 0xFF;
        }
        
        d = Math.max(1, d);
        
        var baseDamage = Math.min(997, Math.floor(Math.floor((Math.floor(2 * lvl / 5) + 2) * a * this.move.power() / d) / 50)) + 2;
        if (this.attacker.stab(this.move.type())) {
            baseDamage = (baseDamage * 3) >> 1;
        }
        var eff = this.effective([this.move.type()],
                                 [this.defender.type1(), this.defender.type2()],
                                 false,
                                 false);
        if (eff === 0) {
            return [0];
        }
        baseDamage = (baseDamage * eff) >> 2;
        // 768+ not having damage variance seems to be proven false.
        damages = [];
        for (var i = 0; i < 39; i++) {
            damages[i] = Math.floor(baseDamage * (217 + i) / 255);
        }
        return damages;
    }
    
    this.gsc_calculate = function() {
        // massive shoutout to Crystal_ for verifying the RBY/GSC mechanics for me
        
        var moveType = this.move.type();
        var movePower = this.move.power();
        var moveName = this.move.name();
        
        if (moveName === "Hidden Power") {
            moveType = hiddenPowerT2(this.attacker.ivs);
            movePower = hiddenPowerP2(this.attacker.ivs);
        } else if (moveName === "Reversal" || moveName === "Flail") {
            movePower = this.flail(this.attacker.currentHP, this.attacker.stat(Stats.HP));
        } else if (moveName === "Frustration") {
            movePower = Math.max(1, Math.floor((255 - this.attacker.happiness) * 10 / 25));
        } else if (moveName === "Return") {
            movePower = Math.max(1, Math.floor(this.attacker.happiness * 10 / 25));
        } else if (moveName === "Future Sight") {
            moveType = 18; // curse so there is no type effectiveness nor stab
        } else if (moveName === "Magnitude") {
            movePower = this.magnitudePower(this.field.magnitude);
        } else if (moveName === "Present") {
            movePower = this.field.present;
        } else if (moveName === "Seismic Toss" || moveName === "Night Shade") {
            return [this.attacker.level];
        } else if (moveName === "Dragon Rage") {
            return [40];
        } else if (moveName === "Sonic Boom") {
            return [20];
        } else if (["Guillotine", "Horn Drill", "Fissure"].indexOf(moveName) > -1) {
            return [65535];
        } else if (moveName === "Psywave") {
            var range = [];
            for (var i = 1; i <= Math.floor(this.attacker.level * 3 / 2 - 1); i++) {
                range[i-1] = i;
            }
            return range;
        } else if (moveName === "Super Fang") {
            return [Math.max(1, this.defender.currentHP >> 1)];
        } else if (moveName === "Rollout") {
            movePower = 30 << (this.field.rollout%5 + this.field.defenseCurl);
        } else if (moveName === "Triple Kick") {
            movePower = 10 * this.field.tripleKickCount;
        } else if (moveName === "Fury Cutter") {
            movePower = Math.min(160, 10 << this.field.furyCutter);
        } else if (moveName === "Beat Up") {
            moveType = Types.CURSE;
        }
        if ((moveName === "Magnitude" || moveName === "Earthquake") && this.field.dig) {
            movePower *= 2;
        } else if ((moveName === "Gust" || moveName === "Twister") && this.field.fly) {
            movePower *= 2;
        }
        
        lvl = this.attacker.level;
        var crit = this.field.critical && ["Reversal", "Flail", "Future Sight"].indexOf(moveName) < 0; // moves can't crit
        var ignoreAtkBoosts = crit && !(this.attacker.boost(Stats.ATK) > this.defender.boost(Stats.DEF));
        var ignoreSpcBoosts = crit && !(this.attacker.boost(Stats.SATK) > this.defender.boost(Stats.SDEF));
        var atk = Math.min(999, this.attacker.boostedStat(Stats.ATK) >> (this.attacker.status===Statuses.BURNED ? 1 : 0));
        var def = Math.min(999, this.defender.boostedStat(Stats.DEF));
        var satk = Math.min(999, this.attacker.boostedStat(Stats.SATK));
        var sdef = Math.min(999, this.defender.boostedStat(Stats.SDEF));
        if (ignoreAtkBoosts) { // crits are weird. thanks to crystal_ and the gsc community on the mt. silver boards
            atk = this.attacker.stat(Stats.ATK);
            def = this.defender.stat(Stats.DEF);
        }
        if (ignoreSpcBoosts) {
            satk = this.attacker.stat(Stats.SATK);
            sdef = this.defender.stat(Stats.SDEF);
        }
        if (this.field.reflect && !ignoreAtkBoosts) {
            def *= 2;
        }
        if (this.field.lightScreen && !ignoreSpcBoosts) {
            sdef *= 2;
        }
        if (this.attacker.name() === "Pikachu" && this.attacker.item.name() === "Light Ball") {
            satk *= 2;
        }
        if ((this.attacker.name() === "Marowak" || this.attacker.name() === "Cubone") && this.attacker.item.name() === "Thick Club") {
            atk *= 2;
        }
        if (moveName === "Explosion" || moveName === "Self-Destruct") {
            def >>= 1;
        }
        if (this.attacker.name() === "Ditto" && this.attacker.item.name() === "Metal Powder") {
            sdef = (spc_d * 3) >> 1;
            def = (def * 3) >> 1;
        }
        
        var a, d;
        if (db.typeDamageClass(moveType) === DamageClasses.PHYSICAL) {
            a = atk;
            d = def;
        } else if (db.typeDamageClass(moveType) === DamageClasses.SPECIAL) {
            a = satk;
            d = sdef;
        } else {
            return [0];
        }
        
        if ((a > 255) || (d > 255)) { // is attack or defense greater than 255?
            a = (a >> 2) & 0xFF;
            d = (d >> 2) & 0xFF;
        }
        // in-game Crystal would repeat the process without &0xFF, but not in link battles
        d = Math.max(1, d);
        
        if (moveName === "Beat Up") {
            a = this.field.beatUpStats[this.field.beatUpHit];
            lvl = this.field.beatUpLevels[this.field.beatUpHit];
            d = this.defender.baseStat(Stats.DEF);
        }
        
        var baseDamage = Math.floor(Math.floor((Math.floor(2 * lvl / 5) + 2) * a * movePower / d) / 50);
        
        baseDamage *= crit ? 2 : 1;
        
        if (moveType === this.attacker.item.typeBoosted()) {
            baseDamage = Math.floor(baseDamage * 110 / 100);
        }
        
        baseDamage = Math.min(997, baseDamage)+2;
        
        if (this.field.weather === Weathers.SUN) {
            if (moveType === Types.FIRE) {
                baseDamage = (baseDamage * 3) >> 1;
            } else if (moveType === Types.WATER) {
                baseDamage >>= 1;
            }
        } else if (this.field.weather === Weathers.RAIN) {
            if (moveType === Types.WATER) {
                baseDamage = (baseDamage * 3) >> 1;
            } else if (moveType === Types.FIRE || moveName === "Solar Beam") {
                baseDamage >>= 1;
            }
        }
        
        if (moveName === "Pursuit" && this.field.switchOut) {
            baseDamage *= 2;
        }
        
        if (this.attacker.stab(moveType)) {
            baseDamage = (baseDamage * 3) >> 1;
        }
        
        var eff = this.effective([moveType],
                                 [this.defender.type1(), this.defender.type2()],
                                 this.field.foresight,
                                 false);
        if (eff === 0) {
            return [0];
        }
        baseDamage = (baseDamage * eff) >> 2;
        // 768+ not having damage variance seems to be proven false.
        if (moveName === "Reversal" || moveName === "Flail") { // these don't have damage variance
            return [baseDamage];
        }
        
        damages = [];
        for (var i = 0; i < 39; i++) {
            damages[i] = Math.floor(baseDamage * (217 + i) / 255);
        }
        return damages;
    }
    
    this.adv_calculate = function() {
        var moveType = this.move.type();
        var movePower = this.move.power();
        var moveName = this.move.name();
        var attackerAbility = new Ability();
        attackerAbility.id = this.attacker.ability.id;
        var defenderAbility = new Ability();
        defenderAbility.id = this.defender.ability.id;
        if (this.move.sound() && defenderAbility.name() === "Soundproof") {
            return [0];
        }
        var attackerItem = new Item();
        attackerItem.id = this.attacker.item.id;
        var defenderItem = new Item();
        defenderItem.id = this.defender.item.id;
        var weather = this.field.airLock ? Weathers.CLEAR : this.field.weather;
        if (moveName === "Hidden Power") {
            movePower = hiddenPowerP(this.attacker.ivs);
            moveType = hiddenPowerT(this.attacker.ivs);
        } else if (moveName === "Reversal" || moveName === "Flail") {
            movePower = this.flail(this.attacker.currentHP, this.attacker.stat(Stats.HP));
        } else if (moveName === "Frustration") {
            movePower = Math.max(1, Math.floor((255 - this.attacker.happiness) * 10 / 25));
        } else if (moveName === "Return") {
            movePower = Math.max(1,Math.floor(this.attacker.happiness * 10 / 25));
        } else if (moveName === "Future Sight" || moveName === "Doom Desire") {
            moveType = 18; // curse so there is no type effectiveness nor stab
        } else if (moveName === "Magnitude") {
            movePower = this.magnitudePower(this.field.magnitude);
        } else if (moveName === "Present") {
            movePower = this.field.present;
        } else if (moveName === "Seismic Toss" || moveName === "Night Shade") {
            return [this.attacker.level];
        } else if (moveName === "Dragon Rage") {
            return [40];
        } else if (moveName === "Sonic Boom") {
            return [20];
        } else if (["Guillotine", "Horn Drill", "Fissure", "Sheer Cold"].indexOf(moveName) > -1) {
            return [this.defender.stat(Stats.HP)];
        } else if (moveName === "Endeavor") {
            return [this.attacker.currentHP >= this.defender.currentHP ? 0 : this.defender.currentHP - this.attacker.currentHP];
        } else if (moveName === "Psywave") {
            var temp = [];
            for (var i = 0; i <= 10; i++) {
                temp[i] = Math.max(1, Math.floor(this.attacker.level * (i * 10 + 50) / 100));
            }
            return temp;
        } else if (moveName === "Super Fang") {
            return [Math.max(1, this.defender.currentHP >> 1)];
        } else if (moveName === "Weather Ball") {
            moveType = this.weatherBall(weather);
        } else if (moveName === "Rollout" || moveName === "Ice Ball") {
            movePower = 30 << (this.field.rollout%5 + this.field.defenseCurl);
        } else if (moveName === "Triple Kick") {
            movePower = 10*this.field.tripleKickCount;
        } else if (moveName === "Water Spout" || moveName === "Eruption") {
            movePower = Math.max(1, Math.floor(150 * this.attacker.currentHP / this.attacker.stat(Stats.HP)));
        } else if (moveName === "Fury Cutter") {
            movePower = Math.min(160, 10 << this.field.furyCutter);
        } else if (moveName === "Beat Up") {
            moveType = Types.CURSE;
        }
        if ((moveName === "Surf" || moveName === "Whirlpool") && this.field.dive) {
            movePower *= 2;
        } else if ((moveName === "Magnitude" || moveName === "Earthquake") && this.field.dig) {
            movePower *= 2;
        } else if ((moveName === "Gust" || moveName === "Twister") && this.field.fly) {
            movePower *= 2;
        }
        
        var atk = this.attacker.stat(Stats.ATK);
        var def = this.defender.stat(Stats.DEF);
        var satk = this.attacker.stat(Stats.SATK);
        var sdef = this.attacker.stat(Stats.SDEF);
        var crit = this.field.critical && ["Reversal", "Flail", "Future Sight", "Doom Desire", "Spit Up"].indexOf(moveName) < 0
                                       && defenderAbility.name() !== "Battle Armor";

        if (attackerAbility.name() === "Huge Power" || attackerAbility.name() === "Pure Power") {
            atk *= 2;
        }
        if (attackerItem.typeBoosted() === moveType) {
            if (db.typeDamageClass(moveType) === DamageClasses.PHYSICAL) { // make sure we are boosting the right stat
                atk = Math.floor(atk * 11 / 10);
            } else {
                satk = Math.floor(satk * (attackerItem.name() === "Sea Incense" ? 105 : 110) / 100); // sea incense is 1.05
            }
        }
        if (attackerItem.name() === "Choice Band") {
            atk = (atk * 3) >> 1;
        }
        if (attackerItem.name() === "Soul Dew") {
            satk = (satk * 3) >> 1;
        }
        if (defenderItem.name() === "Soul Dew") {
            sdef = (sdef * 3) >> 1;
        }
        if (attackerItem.name() === "Deep Sea Tooth" && this.attacker.name() === "Clamperl") {
            satk *= 2;
        }
        if (defenderItem.name() === "Deep Sea Scale" && this.defender.name() === "Clamperl") {
            sdef *= 2;
        }
        if (attackerItem.name() === "Light Ball" && this.attacker.name() === "Pikachu") {
            satk *= 2;
        }
        if (defenderItem.name() === "Metal Powder" && this.defender.name() === "Ditto") {
            def *= 2;
        }
        if (attackerItem.name() === "Thick Club" && (this.attacker.name() === "Marowak" || this.defender.name() === "Cubone")) {
            atk *= 2;
        }
        if (defenderAbility.name() === "Thick Fat" && (moveType === Types.FIRE || moveType === Types.ICE)) {
            satk >>= 1;
        }
        if (attackerAbility.name() === "Hustle") {
            atk = (atk * 3) >> 1;
        }
        if ((attackerAbility.name() === "Plus" && this.field.minus) || (attackerAbility.name() === "Minus" && this.field.plus)) {
            satk = (satk * 3) >> 1;
        }
        if (attackerAbility.name() === "Guts" && this.attacker.status !== Statuses.NOSTATUS) {
            atk = (atk * 3) >> 1;
        }
        if (defenderAbility.name() === "Marvel Scale" && this.defender.status !== Statuses.NOSTATUS) {
            def = (def * 3) >> 1;
        }
        if ((this.field.mudSport && moveType === Types.ELECTRIC) || (this.field.waterSport && moveType === Types.FIRE)) {
            movePower >>= 1;
        }
        if (attackerAbility.pinchType() === moveType && this.attacker.stat(Stats.HP) >= this.attacker.currentHP * 3) {
            movePower = (movePower * 3) >> 1;
        }
        if (moveName === "Self-Destruct" || moveName === "Explosion") {
            if (defenderAbility.name() === "Damp") return [0];
            def >>= 1;
        }
        if (crit) {
            atk = Math.floor((this.attacker.boosts[Stats.ATK] > 0 ? 2 + this.attacker.boosts[Stats.ATK] : 2) * atk / 2);
            satk = Math.floor((this.attacker.boosts[Stats.SATK] > 0 ? 2 + this.attacker.boosts[Stats.SATK] : 2) * satk / 2);
            def = Math.floor(2 * def / (this.defender.boosts[Stats.DEF] < 0 ? 2 - this.defender.boosts[Stats.DEF] : 2));
            sdef = Math.floor(2 * sdef / (this.defender.boosts[Stats.SDEF] < 0 ? 2 - this.defender.boosts[Stats.SDEF] : 2));
        } else {
            atk = Math.floor(atk * (this.attacker.boosts[Stats.ATK] > 0 ? 2 + this.attacker.boosts[Stats.ATK] : 2) / (this.attacker.boosts[Stats.ATK] < 0 ? 2 - this.attacker.boosts[Stats.ATK] : 2));
            satk = Math.floor(satk * (this.attacker.boosts[Stats.SATK] > 0 ? 2 + this.attacker.boosts[Stats.SATK] : 2) / (this.attacker.boosts[Stats.SATK] < 0 ? 2 - this.attacker.boosts[Stats.SATK] : 2));
            def = Math.floor(def * (this.defender.boosts[Stats.DEF] > 0 ? 2 + this.defender.boosts[Stats.DEF] : 2) / (this.defender.boosts[Stats.DEF] < 0 ? 2 - this.defender.boosts[Stats.DEF] : 2));
            sdef = Math.floor(sdef*(this.defender.boosts[Stats.SDEF] > 0 ? 2 + this.defender.boosts[Stats.SDEF] : 2) / (this.defender.boosts[Stats.SDEF] < 0 ? 2 - this.defender.boosts[Stats.SDEF] : 2));
        }

        var a, d;
        if (moveName === "Beat Up") {
            a = this.field.beatUpStats[this.field.beatUpHit];
            lvl = this.field.beatUpLevels[this.field.beatUpHit];
            d = this.defender.baseStat(Stats.DEF);
        } else if (db.typeDamageClass(moveType) === DamageClasses.PHYSICAL) {
            a = atk;
            d = def;
        } else if (db.typeDamageClass(moveType) === DamageClasses.SPECIAL) {
            a = satk;
            d = sdef;
        } else {
            return [0];
        }
        
        var baseDamage = Math.floor(Math.floor((Math.floor(2 * this.attacker.level / 5) + 2) * a * movePower / d) / 50);
        
        if (this.attacker.status === Statuses.BURNED && attackerAbility.name() !== "Guts" && moveName !== "Beat Up") {
            baseDamage >>= 1;
        }
        if ((this.field.reflect && db.typeDamageClass(moveType) === DamageClasses.PHYSICAL) || (this.field.lightScreen && db.typeDamageClass(moveType) === DamageClasses.SPECIAL)) {
            if (!crit && moveName !== "Beat Up") {
                if (this.field.multiBattle) {
                    baseDamage = Math.floor(baseDamage * 2 / 3);
                } else {
                    baseDamage >>= 1;
                }
            }
        }
                
        if (this.field.multiBattle && this.move.multiTargets()) {
            baseDamage >>= 1;
        }
        
        if (weather === Weathers.SUN) {
            if (moveType === Types.FIRE) {
                baseDamage = (baseDamage * 3) >> 1;
            } else if (moveType === Types.WATER) {
                baseDamage >>= 1;
            }
        } else if (weather === Weathers.RAIN) {
            if (moveType === Types.WATER) {
                baseDamage = (baseDamage * 3) >> 1;
            } else if (moveType === Types.FIRE) {
                baseDamage >>= 1;
            }
        }
        if (moveName === "Solar Beam" && [Weathers.SUN, Weathers.CLEAR].indexOf(weather) < 0) {
            baseDamage >>= 1;
        }
        
        if (this.field.flashFire && moveType === Types.FIRE && attackerAbility.name() === "Flash Fire") {
            baseDamage = (baseDamage * 3) >> 1;
        }
        
        if (db.typeDamageClass(moveType) === DamageClasses.PHYSICAL) {
            baseDamage = Math.max(1, baseDamage);
        }
        
        baseDamage += 2;
        
        baseDamage *= crit ? 2 : 1;
        
        if (moveName === "Facade" && this.attacker.status !== NONE) {
            baseDamage *= 2;
        } else if (moveName === "Pursuit" && this.field.switchOut) {
            baseDamage *= 2;
        } else if (moveName === "Revenge" && this.field.attackerDamaged) {
            baseDamage *= 2;
        } else if (moveName === "Smelling Salts" && this.defender.status === Statuses.PARALYZED) {
            baseDamage *= 2;
        } else if (["Stomp", "Extrasensory", "Astonish", "Needle Arm"].indexOf(moveName) > -1 && this.field.minimize) {
            baseDamage *= 2;
        } else if (moveName === "Weather Ball" && weather !== Weathers.CLEAR) {
            baseDamage *= 2;
        }
        
        if (this.field.charge && moveType === Types.ELECTRIC) {
            baseDamage *= 2;
        }
        
        if (this.field.helpingHand) {
            baseDamage = (baseDamage * 3) >> 1;
        }
        
        if (this.attacker.stab(moveType)) {
            baseDamage = (baseDamage * 3) >> 1;
        }
        
        var eff = this.effective([moveType],
                                 [this.defender.type1(), this.defender.type2()],
                                 this.field.foresight,
                                 false);
        if (eff === 0 || moveType === defenderAbility.immunityType()) {
            return [0];
        }
        baseDamage = (baseDamage * eff) >> 2;
        
        if (moveName === "Spit Up") {
            return [this.field.stockpile > 0 ? baseDamage : 0]
        }
        
        var damages = [];
        for (var i = 0; i < 16; i++) {
            damages[i] = Math.max(1, Math.floor(baseDamage * (85 + i) / 100));
        }
        
        if (defenderAbility.name() === "Sturdy" && this.defender.currentHP === this.defender.stat(Stats.HP)) {
            for (var i = 0; i < damages.length; i++) {
                damages[i] = Math.min(damages[i], this.defender.stat(Stats.HP) - 1);
            }
        }
        
        return damages;
    }
    
    this.hgss_calculate = function() {
        var moveType = this.move.type();
        var movePower = this.move.power();
        var attackerAbility = new Ability();
        attackerAbility.id = this.attacker.ability.id;
        var defenderAbility = new Ability();
        defenderAbility.id = this.defender.ability.id;
        if (attackerAbility.moldBreaker() && defenderAbility.ignorable()) {
            defenderAbility.id = "0";
        }
        if (this.move.sound() && defenderAbility.name() === "Soundproof") {
            return [0];
        }
        var attackerItem = new Item();
        attackerItem.id = attackerAbility.name() === "Klutz" || this.attackerItemUsed ? 0 : this.attacker.item.id;
        var defenderItem = new Item();
        defenderItem.id = defenderAbility.name() === "Klutz" || this.defenderItemUsed ? 0 : this.defender.item.id;
        var weather = this.field.airLock ? Weathers.CLEAR : this.field.weather;
        
        var attackerSpeed = attackerAbility.name() === "Simple" ? this.attacker.simpleBoostedStat(Stats.SPD) : this.attacker.boostedStat(Stats.SPD);
        var defenderSpeed = defenderAbility.name() === "Simple" ? this.defender.simpleBoostedStat(Stats.SPD) : this.defender.boostedStat(Stats.SPD);
        if ((weather === Weathers.RAIN && attackerAbility.name() === "Swift Swim") || (weather === Weathers.SUN && attackerAbility.name() === "Chlorophyll")) {
            attackerSpeed *= 2;
        }
        if ((weather === Weathers.RAIN && defenderAbility.name() === "Swift Swim") || (weather === Weathers.SUN && defenderAbility.name() === "Chlorophyll")) {
            defenderSpeed *= 2;
        }
        var aItemName = attackerItem.name();
        var dItemName = defenderItem.name();
        var aAbilityName = attackerAbility.name();
        var dAbilityName = defenderAbility.name();
        var aItemName2 = this.attacker.item.name();
        var dItemName2 = this.defender.item.name();
        if (["Iron Ball", "Macho Brace", "Power Bracer", "Power Belt", "Power Lens", "Power Band", "Power Anklet", "Power Weight"].indexOf(aItemName2) > -1) {
            attackerSpeed >>= 1;
        }
        if (["Iron Ball", "Macho Brace", "Power Bracer", "Power Belt", "Power Lens", "Power Band", "Power Anklet", "Power Weight"].indexOf(dItemName2) > -1) {
            defenderSpeed >>= 1;
        }
        if (aItemName === "Choice Scarf") {
            attackerSpeed = (attackerSpeed * 3) >> 1;
        }
        if (dItemName === "Choice Scarf") {
            defenderSpeed = (defenderSpeed * 3) >> 1;
        }
        if (aItemName === "Quick Powder" && this.attacker.name() === "Ditto") {
            attackerSpeed *= 2;
        }
        if (dItemName === "Quick Powder" && this.defender.name() === "Ditto") {
            defenderSpeed *= 2;
        }
        if (aAbilityName === "Quick Feet" && this.attacker.status !== Statuses.NOSTATUS) {
            attackerSpeed = (attackerSpeed * 3) >> 1;
        } else if (this.attacker.status === Statuses.PARALYZED) {
            attackerSpeed >>= 2;
        }
        if (dAbilityName === "Quick Feet" && this.defender.status !== Statuses.NOSTATUS) {
            defenderSpeed = (defenderSpeed * 3) >> 1;
        } else if (this.defender.status === Statuses.PARALYZED) {
            defenderSpeed >>= 2;
        }
        if (aAbilityName === "Slow Start" && this.field.slowStart) {
            attackerSpeed >>= 1;
        }
        if (this.attacker.item.id === "0" && aAbilityName === "Unburden") {
            attackerSpeed *= 2;
        }
        if (this.defender.item.id === "0" && dAbilityName === "Unburden") {
            defenderSpeed *= 2;
        }
        if (this.attacker.tailwind) {
            attackerSpeed *= 2;
        }
        if (this.defender.tailwind) {
            defenderSpeed *= 2;
        }
        
        var moveName = this.move.name();
        if (moveName === "Hidden Power") {
            movePower = hiddenPowerP(this.attacker.ivs);
            moveType = hiddenPowerT(this.attacker.ivs);
        } else if (moveName === "Reversal" || moveName === "Flail") {
            var n = Math.floor(this.attacker.currentHP * 64 / this.attacker.stat(Stats.HP));
            if (n < 2) {
                movePower = 200;
            } else if (n < 6) {
                movePower = 150;
            } else if (n < 13) {
                movePower = 100;
            } else if (n < 22) {
                movePower = 80;
            } else if (n < 43) {
                movePower = 40;
            } else {
                movePower = 20;
            }
        } else if (moveName === "Frustration") {
            movePower = Math.max(1, Math.floor((255 - this.attacker.happiness) * 10 / 25));
        } else if (moveName === "Return") {
            movePower = Math.max(1, Math.floor(this.attacker.happiness * 10 / 25));
        } else if (moveName === "Future Sight" || moveName === "Doom Desire") {
            moveType = 18; // curse so there is no type effectiveness nor stab
        } else if (moveName === "Magnitude") {
            movePower = this.magnitudePower(this.field.magnitude);
        } else if (moveName === "Present") {
            movePower = this.field.present;
        } else if (moveName === "Seismic Toss" || moveName === "Night Shade") {
            return [this.attacker.level];
        } else if (moveName === "Dragon Rage") {
            return [40];
        } else if (moveName === "Sonic Boom") {
            return [20];
        } else if (["Guillotine", "Horn Drill", "Fissure", "Sheer Cold"].indexOf(moveName) > -1) {
            return [this.defender.stat(Stats.HP)];
        } else if (moveName === "Endeavor") {
            return [this.attacker.currentHP >= this.defender.currentHP ? 0 : this.defender.currentHP - this.attacker.currentHP];
        } else if (moveName === "Psywave") {
            var temp = [];
            for (var i = 0; i <= 10; i++) {
                temp[i] = Math.max(1, (Math.floor(this.attacker.level * (10 * i + 50) / 100)));
            }
            return temp;
        } else if (moveName === "Super Fang") {
            return [Math.max(1, this.defender.currentHP >> 1)];
        } else if (moveName === "Weather Ball") {
            moveType = this.weatherBall(weather);
            movePower = moveType === Types.NORMAL ? 50 : 100;
        } else if (moveName === "Rollout" || moveName === "Ice Ball") {
            movePower = 30 << (this.field.rollout%5 + this.field.defenseCurl);
        } else if (moveName === "Triple Kick") {
            movePower = 10 * this.field.tripleKickCount;
        } else if (((moveName === "Avalanche" && !this.field.painSplit) || (moveName === "Revenge" && !this.field.painSplit) || moveName === "Assurance") && this.field.attackerDamaged) {
            movePower *= 2;
        } else if (moveName === "Wring Out" || moveName === "Crush Grip") {
            movePower = Math.floor(this.defender.currentHP * 120 / Math.max(1, this.defender.stat(Stats.HP))) + 1;
        } else if (moveName === "Water Spout" || moveName === "Eruption") {
            movePower = Math.max(1, Math.floor(150 * this.attacker.currentHP / this.attacker.stat(Stats.HP)));
        } else if (moveName === "Brine" && this.defender.currentHP * 2 <= this.defender.stat(Stats.HP)) {
            movePower *= 2;
        } else if (moveName === "Echoed Voice") {
            movePower = Math.min(200, 40 + 40 * field.echoedVoice);
        } else if (moveName === "Facade" && this.attacker.status !== Statuses.NOSTATUS) {
            movePower *= 2;
        } else if (moveName === "Trump Card") {
            movePower = this.trumpPower(this.field.trumpPP);
        } else if (moveName === "Wake-Up Slap" && this.defender.status === Statuses.ASLEEP) {
            movePower *= 2;
        } else if (moveName === "Smelling Salts" && this.defender.status === Statuses.PARALYZED) {
            movePower *= 2;
        } else if (moveName === "Gyro Ball") {
            movePower = this.gyroBall(attackerSpeed, defenderSpeed);
        } else if (moveName === "Low Kick" || moveName === "Grass Knot") {
            movePower = this.grassKnot(defenderWeight);
        } else if (moveName === "Fury Cutter") {
            movePower = Math.min(160, 10 << this.field.furyCutter);
        } else if (moveName === "Punishment") {
            movePower = this.punishment(this.defender.boosts);
        } else if (moveName === "Pursuit" && this.field.switchOut) {
            movePower *= 2;
        } else if (moveName === "Stomp" && this.field.minimize) {
            movePower *= 2;
        } else if (moveName === "Spit Up") {
           movePower = 100 * this.field.stockpile;
            if (movePower === 0) {
                return [0];
            }
        } else if (moveName === "Natural Gift" && attackerItem.id >= 8000) {
            movePower = db.berryPower(atackerItem.id - 8000);
            moveType = db.berryType(atackerItem.id - 8000);
        } else if (moveName === "Fling") {
            movePower = db.flingPower(attackerItem.id);
        } else if (moveName === "Beat Up") {
            moveType = Types.CURSE;
        } else if (moveName === "Judgment" && this.attacker.item.plateType() !== -1) {
            moveType = this.attacker.item.plateType();
        }
        if ((moveName === "Surf" || moveName === "Whirlpool") && this.field.dive) {
            movePower *= 2;
        } else if ((moveName === "Magnitude" || moveName === "Earthquake") && this.field.dig) {
            movePower *= 2;
        } else if ((moveName === "Gust" || moveName === "Twister") && this.field.fly) {
            movePower *= 2;
        }
        
        if (this.field.helpingHand) {
            movePower = (movePower * 3) >> 1;
        }
        
        if ((aItemName === "Muscle Band" && this.move.damageClass() === DamageClasses.PHYSICAL) || (aItemName === "Wise Glasses" && this.move.damageClass() === DamageClasses.SPECIAL)) {
            movePower = Math.floor(movePower * 11 / 10);
        } else if (aItemName === "Lustrous Orb" && (moveType === Types.WATER || moveType === Types.DRAGON) && this.attacker.name() === "Palkia") {
            movePower = Math.floor(movePower * 12 / 10);
        } else if (aItemName === "Griseous Orb" && (moveType === Types.GHOST || moveType === Types.DRAGON) && this.attacker.name() === "Giratina-O") {
            movePower = Math.floor(movePower * 12 / 10);
        } else if (aItemName === "Adamant Orb" && (moveType === Types.STEEL || moveType === Types.DRAGON) && this.attacker.name() === "Dialga") {
            movePower = Math.floor(movePower * 12 / 10);
        } else if (attackerItem.typeBoosted() === moveType) {
            movePower = Math.floor(movePower * 12 / 10);
        }
        
        if (this.field.charge && moveType === Types.ELECTRIC) {
            movePower *= 2;
        }
        
        if (aAbilityName === "Rivalry") {
            if (this.attacker.gender !== this.defender.gender && this.attacker.gender !== Genders.NOGENDER) {
                movePower = (movePower * 5) >> 2; // 125/100
            } else if (this.attacker.gender===this.defender.gender && this.attacker.gender !== Genders.NOGENDER) {
                movePower = (movePower * 3 ) >> 2; // 75/100
            }
        } else if (aAbilityName === "Reckless" && (moveName === "Jump Kick" || moveName === "High Jump Kick" || this.move.hasRecoil())) {
            movePower = Math.floor(movePower * 12 / 10);
        } else if (aAbilityName === "Iron Fist" && this.move.punch()) {
            movePower = Math.floor(movePower * 12 / 10);
        } else if (aAbilityName === "Technician" && movePower <= 60) {
            movePower = (movePower * 3) >> 1;
        }
        
        if (dAbilityName === "Heatproof" && moveType === Types.FIRE) {
            movePower >>= 1;
        } else if (dAbilityName === "Thick Fat" && (moveType === Types.FIRE || moveType === Types.ICE)) {
            movePower >>= 1;
        } else if (dAbilityName === "Dry Skin" && moveType === Types.FIRE) {
            movePower = (moverPower*5)>>2;
        }
        if ((this.field.mudSport && moveType === Types.ELECTRIC) || (this.field.waterSport && moveType === Types.FIRE)) {
            movePower = movePower >> 1;
        }
        
        var atk, def, sdef, satk;
        var simpleA = aAbilityName === "Simple";
        var simpleD = dAbilityName === "Simple";
        var unawareA = aAbilityName === "Unaware";
        var unawareD = dAbilityName === "Unaware";
        if (this.field.crit) {
            if (unawareA) {
                def = this.defender.stat(Stats.DEF);
                sdef = this.defender.stat(Stats.SDEF);
            } else {
                def = Math.min(this.defender.stat(Stats.DEF), simpleD ? this.defender.simpleBoostedStat(Stats.DEF)
                                                                      : this.defender.boostedStat(Stats.DEF));
                sdef = Math.min(this.defender.stat(Stats.SDEF), simpleD ? this.defender.simpleBoostedStat(Stats.SDEF)
                                                                        : this.defender.boostedStat(Stats.SDEF));
            }
            if (unawareD) {
                atk = this.defender.stat(Stats.ATK);
                satk = this.defender.stat(Stats.SATK);
            } else {
                atk = Math.max(this.attacker.stat(Stats.ATK), simpleA ? this.attacker.simpleBoostedStat(Stats.ATK)
                                                                      : this.attacker.boostedStat(Stats.ATK));
                satk = Math.max(this.attacker.stat(Stats.SATK), simpleA ? this.attacker.simpleBoostedStat(Stats.SATK)
                                                                        : this.attacker.boostedStat(Stats.SATK));
            }
        } else {
            if (unawareA) {
                def = this.defender.stat(Stats.DEF);
                sdef = this.defender.stat(Stats.SDEF);
            } else {
                def = simpleD ? this.defender.simpleBoostedStat(Stats.DEF)
                              : this.defender.boostedStat(Stats.DEF);
                sdef = simpleD ? this.defender.simpleBoostedStat(Stats.SDEF)
                               : this.defender.boostedStat(Stats.SDEF);
            }
            if (unawareD) {
                atk = this.defender.stat(Stats.ATK);
                satk = this.defender.stat(Stats.SATK);
            } else {
                atk = simpleA ? this.attacker.simpleBoostedStat(Stats.ATK)
                              : this.attacker.boostedStat(Stats.ATK);
                satk = simpleA ? this.attacker.simpleBoostedStat(Stats.SATK)
                               : this.attacker.boostedStat(Stats.SATK);
            }
        }
        
        if (aAbilityName === "Huge Power" || aAbilityName === "Pure Power") {
            atk *= 2;
        } else if (this.attacker.flowerGift && weather === Weathers.SUN) {
            atk *= 2;
        } else if (aAbilityName === "Guts" && this.attacker.status !== Statuses.NOSTATUS) {
            atk = (atk * 3) >> 1;
        } else if (aAbilityName === "Hustle") {
            atk = (atk * 3) >> 1;
        } else if (aAbilityName === "Slow Start" && this.field.slowStart) {
            atk >>= 1;
        } else if ((aAbilityName === "Plus" && this.field.minus) || (aAbilityName === "Minus" && this.field.plus)) {
            satk = (satk * 3) >> 1;
        } else if (aAbilityName === "Solar Power" && weather === Weathers.SUN) {
            satk *= 2;
        }
        
        if (aItemName === "Choice Band") {
            atk *= 2;
        } else if (aItemName === "Light Ball" && this.attacker.name() === "Pikachu") {
            atk *= 2;
            satk *= 2;
        } else if (aItemName === "Thick Club" && (this.attacker.name() === "Cubone" || this.attacker.name() === "Marowak")) {
            atk *= 2;
        } else if (aItemName === "Choice Specs") {
            satk = (satk * 3) >> 1;
        } else if (aItemName === "Soul Dew" && (this.attacker.name() === "Latias" || this.attacker.name() === "Latios")) {
            satk = (satk * 3) >> 1;
        } else if (aItemName === "Deep Sea Tooth" && this.attacker.name() === "Clamperl") {
            satk *= 2;
        }
        
        if (moveName === "Explosion" || moveName === "Self-Destruct") {
            if (defenderAbility.name() === "Damp") return [0];
            def >>= 1;
        }
        
        if (dAbilityName === "Marvel Scale" && this.defender.status !== Statuses.NOSTATUS) {
            def = (def * 3) >> 1;
        }
        
        if (this.defender.flowerGift && weather === Weathers.SUN) {
            sdef = (sdef * 3) >> 1;
        }
        
        if (dItemName === "Metal Powder" && this.defender.name() === "Ditto") {
            def *= 2;
        } else if (dItemName === "Soul Dew" && (this.defender.name() === "Latias" || this.defender.name() === "Latios")) {
            sdef = (sdef * 3) >> 1;
        } else if (dItemName === "Deep Sea Scale" && this.defender.name() === "Clamperl") {
            sdef *= 2;
        }
        
        if (weather === Weathers.SAND && (this.defender.type1() === Types.ROCK || this.defender.type2() === Types.ROCK)) {
            sdef = (sdef * 3) >> 1;
        }
        
        var a, d;
        if (moveName === "Beat Up") {
            a = this.field.beatUpStats[this.field.beatUpHit];
            lvl = this.field.beatUpLevels[this.field.beatUpHit];
            d = this.defender.baseStat(Stats.DEF);
        } else if (this.move.damageClass() === DamageClasses.PHYSICAL) {
            a = atk;
            d = def;
        } else if (this.move.damageClass() === DamageClasses.SPECIAL) {
            a = satk;
            d = sdef;
        } else {
            return [0];
        }
        
        var baseDamage = Math.floor(Math.floor((Math.floor(2 * this.attacker.level / 5) + 2) * a * movePower / d) / 50);
        
        if (this.attacker.status === Statuses.BURNED && aAbilityName !== "Guts" && this.move.damageClass() === DamageClasses.PHYSICAL && moveName !== "Beat Up") {
            baseDamage >>= 1;
        }
        
        if ((this.move.damageClass() === DamageClasses.PHYSICAL && this.field.reflect) || (this.move.damageClass() === DamageClasses.SPECIAL && this.field.lightScreen)) {
            if (moveName !== "Beat Up" && !this.field.crit) {
                if (this.field.multiBattle) {
                    baseDamage = Math.floor(baseDamage * 2 / 3);
                } else {
                    baseDamage >>= 1;
                }
            }
        }
        
        if (this.field.multiBattle && this.move.multiTargets()) {
            baseDamage = (baseDamage * 3) >> 2;
        }
        
        if (weather === Weathers.SUN) {
            if (moveType === Types.FIRE) {
                baseDamage = (baseDamage * 3) >> 1;
            } else if (moveType === Types.WATER) {
                baseDamage >>= 1;
            }
        } else if (weather === Weathers.RAIN) {
            if (moveType === Types.WATER) {
                baseDamage = (baseDamage * 3) >> 1;
            } else if (moveType === Types.FIRE) {
                baseDamage >>= 1;
            }
        }
        if (moveName === "Solar Beam" && [Weathers.CLEAR, Weathers.SUN].indexOf(weather) < 0) {
            baseDamage >>= 1;
        }
        
        if (aAbilityName === "Flash Fire" && this.field.flashFire && moveType === Types.FIRE) {
            baseDamage = (baseDamage * 3) >> 1;
        }
        
        baseDamage += 2;
        baseDamage *= this.field.critical ? (aAbilityName === "Sniper" ? 3 : 2) : 1;
        
        if (aItemName === "Life Orb" && moveName !== "Beat Up") {
            baseDamage = Math.floor(baseDamage * 13 / 10);
        } else if (aItemName === "Metronome" && moveName !== "Beat Up") {
            baseDamage = Math.floor(baseDamage*Math.min(20, 10 + this.field.metronome) / 10);
        }
        
        if (this.field.meFirst && moveName !== "Beat Up") {
            baseDamage = (baseDamage * 3) >> 1;
        }
        
        var damages = [];
        for (var i = 0; i < 16; i++) {
            damages[i] = Math.max(1, Math.floor(baseDamage * (85 + i) / 100));
        }
        
        if (this.attacker.stab(moveType)) {
            for (var i = 0; i < 16; i++) {
                damages[i] = (damages[i] * 3) >> 1;
            }
        }
        
        var eff = this.effective([moveType],
                                 [this.defender.type1(), this.defender.type2()],
                                 this.field.foresight || attackerAbility.name() === "Scrappy",
                                 false);
        if (eff === 0 || moveType === defenderAbility.immunityType()) {
            return [0];
        }
        for (var i = 0; i < 16; i++) {
            damages[i] = (damages[i] * eff) >> 2;
        }
        
        if ((dAbilityName === "Solid Rock" || dAbilityName === "Filter") && eff > 4) {
            for (var i = 0; i < 16; i++) {
                damages[i] = (damages[i] * 3) >> 2;
            }
        }
        
        if (aItemName === "Expert Belt" && eff > 4) {
            for (var i = 0; i < 16; i++) {
                damages[i] = Math.floor(damages[i] * 12 / 10);
            }
        }
        
        if (defenderItem.berryType() === moveType && eff > 4) {
            for (var i = 0; i < 16; i++) {
                damages[i] >>= 1;
            }
        }
        
        if (aAbilityName === "Tinted Lens" && eff < 4) {
            for (var i = 0; i < 16; i++) {
                damages[i] *= 2;
            }
        }
        
        if (defenderItem.berryType() === Types.NORMAL && moveType === Types.NORMAL) {
            for (var i = 0; i < 16; i++) {
                damages[i] >>= 1;
            }
        }
        
        if (dAbilityName === "Sturdy" && this.defender.currentHP === this.defender.stat(Stats.HP)) {
            for (var i = 0; i < damages.length; i++) {
                damages[i] = Math.min(damages[i], this.defender.stat(Stats.HP) - 1);
            }
        }
        
        return damages;
    }
    
    this.b2w2_calculate = function() {
        var moveType = this.move.type();
        var movePower = this.move.power();
        var atk = 0, def = 0, satk = 0, sdef = 0;
        var attackerWeight = this.attacker.weight() * 10;
        var defenderWeight = this.defender.weight() * 10;
        var attackerAbility = new Ability();
        attackerAbility.id = this.attacker.ability.id;
        var defenderAbility = new Ability();
        defenderAbility.id = this.defender.ability.id;
        if (attackerAbility.moldBreaker() && defenderAbility.ignorable()) {
            defenderAbility.id = "0";
        }
        var aAbilityName = attackerAbility.name();
        var dAbilityName = defenderAbility.name();
        if (this.move.sound() && dAbilityName === "Soundproof") {
            return [0];
        }
        var attackerItem = new Item();
        attackerItem.id = (this.field.magicRoom || aAbilityName === "Klutz" || this.attackerItemUsed) ? 0 : this.attacker.item.id;
        var defenderItem = new Item();
        defenderItem.id = (this.field.magicRoom || dAbilityName === "Klutz" || this.defenderItemUsed) ? 0 : this.defender.item.id;
        aItemName = attackerItem.name();
        dItemName = defenderItem.name();
        var weather = this.field.airLock ? Weathers.CLEAR : this.field.weather;
        var crit = this.field.critical;
        var attackerSpeed = this.attacker.boostedStat(Stats.SPD);
        var defenderSpeed = this.defender.boostedStat(Stats.SPD);
        if ((weather === Weathers.RAIN && aAbilityName === "Swift Swim") || (weather === Weathers.SUN && aAbilityName === "Chlorophyll")) {
            attackerSpeed *= 2;
        }
        if ((weather === Weathers.RAIN && dAbilityName === "Swift Swim") || (weather === Weathers.SUN && dAbilityName === "Chlorophyll")) {
            defenderSpeed *= 2;
        }
        if (["Iron Ball", "Macho Brace", "Power Bracer", "Power Belt", "Power Lens", "Power Band", "Power Anklet", "Power Weight"].indexOf(this.attacker.item.name()) > -1) {
            attackerSpeed >>= 1;
        }
        if (["Iron Ball", "Macho Brace", "Power Bracer", "Power Belt", "Power Lens", "Power Band", "Power Anklet", "Power Weight"].indexOf(this.defender.item.name()) > -1) {
            defenderSpeed >>= 1;
        }
        if (aItemName === "Choice Scarf") {
            attackerSpeed = (attackerSpeed * 3) >> 1;
        }
        if (dItemName === "Choice Scarf") {
            defenderSpeed = (defenderSpeed * 3) >> 1;
        }
        if (aItemName === "Quick Powder" && this.attacker.name() === "Ditto") {
            attackerSpeed *= 2;
        }
        if (dItemName === "Quick Powder" && this.defender.name() === "Ditto") {
            defenderSpeed *= 2;
        }
        if (aAbilityName === "Quick Feet" && this.attacker.status !== Statuses.NOSTATUS) {
            attackerSpeed = (attackerSpeed * 3) >> 1;
        } else if (this.attacker.status === Statuses.PARALYZED) {
            attackerSpeed >>= 2;
        }
        if (dAbilityName === "Quick Feet" && this.defender.status !== Statuses.NOSTATUS) {
            defenderSpeed = (defenderSpeed * 3) >> 1;
        } else if (this.defender.status === Statuses.PARALYZED) {
            defenderSpeed >>= 2;
        }
        if (aAbilityName === "Slow Start" && this.field.slowStart) {
            attackerSpeed >>= 1;
        }
        if (this.attacker.item.id === "0" && aAbilityName === "Unburden") {
            attackerSpeed *= 2;
        }
        if (this.defender.item.id === "0" && dAbilityName === "Unburden") {
            defenderSpeed *= 2;
        }
        if (this.attacker.tailwind) {
            attackerSpeed *= 2;
        }
        if (this.defender.tailwind) {
            defenderSpeed *= 2;
        }

        if (this.attacker.autotomize) {
            attackerWeight -= 1000;
        }
        if (aAbilityName === "Light Metal") {
            attackerWeight /= 2;
        } else if (aAbilityName === "Heavy Metal") {
            attackerWeight *= 2;
        }
        if (aItemName === "Float Stone") {
            attackerWeight /= 2;
        }
        attackerWeight = Math.max(1, attackerWeight - Math.floor(attackerWeight) > 0.5 ? 1 + Math.floor(attackerWeight) : Math.floor(attackerWeight));
        
        if (this.defender.autotomize) {
            defenderWeight -= 1000;
        }
        if (dAbilityName === "Light Metal") {
            defenderWeight /= 2;
        } else if (dAbilityName === "Heavy Metal") {
            defenderWeight *= 2;
        }
        if (dItemName === "Float Stone") {
            defenderWeight /= 2;
        }
        defenderWeight = Math.max(1, defenderWeight - Math.floor(defenderWeight) > 0.5 ? 1 + Math.floor(defenderWeight) : Math.floor(defenderWeight));
        
        var moveName = this.move.name();
        if (moveName === "Seismic Toss" || moveName === "Night Shade") {
            return [this.attacker.level];
        } else if (moveName === "Dragon Rage") {
            return [40];
        } else if (moveName === "Sonic Boom") {
            return [20];
        } else if (["Guillotine", "Horn Drill", "Fissure", "Sheer Cold"].indexOf(moveName) > -1) {
            return [this.defender.stat(Stats.HP)];
        } else if (moveName === "Endeavor") {
            return [this.attacker.currentHP >= this.defender.currentHP ? 0 : this.defender.currentHP - this.attacker.currentHP];
        } else if (moveName === "Psywave") {
            var range = [];
            for (var i = 0; i <= 100; i++) {
                range[i] = Math.max(1, Math.floor(this.attacker.level * (i + 50) / 100))
            }
            return range;
        } else if (moveName === "Super Fang") {
            return [Math.max(1, this.defender.currentHP >> 1)];
        } else if (moveName === "Weather Ball") {
            moveType = this.weatherBall(weather);
            movePower = moveType === Types.NORMAL ? 50 : 100;
        } else if (moveName === "Frustration") {
            movePower = Math.max(1, Math.floor((255 - this.attacker.happiness) * 10 / 25));
        } else if (moveName === "Return") {
            movePower = Math.max(1, Math.floor(this.attacker.happiness * 10 / 25));
        } else if (moveName === "Payback" && this.field.targetMoved) {
            movePower *= 2;
        } else if (moveName === "Electro Ball") {
            movePower = this.electroBall(attackerSpeed, defenderSpeed);
        } else if (((moveName === "Avalanche" && !this.field.painSplit) || (moveName === "Revenge" && !this.field.painSplit) || this.move.name === "Assurance") && this.field.attackerDamaged) {
            movePower *= 2;
        } else if (moveName === "Gyro Ball") {
            movePower = this.gyroBall(attackerSpeed, defenderSpeed);
        } else if (moveName === "Water Spout" || moveName === "Eruption") {
            movePower = Math.max(1, Math.floor(150 * this.attacker.currentHP / this.attacker.stat(Stats.HP)));
        } else if (moveName === "Punishment") {
            movePower = this.punishment(this.defender.boosts);
        } else if (moveName === "Fury Cutter") {
            movePower = Math.min(160, 20 << this.field.furyCutter);
        } else if (moveName === "Low Kick" || moveName === "Grass Knot") { // very effective on zorodark
            movePower = this.grassKnot(defenderWeight);
        } else if (moveName === "Echoed Voice") {
            movePower = Math.min(200, 40 + 40 * field.echoedVoice);
        } else if (moveName === "Hex" && this.defender.status !== Statuses.NOSTATUS) {
            movePower *= 2;
        } else if (moveName === "Wring Out" || moveName === "Crush Grip") {
            var r = 120 * defender.currentHP / defender.getStat(Stats.HP);
            r = (r - Math.floor(r) > 0.5) ? 1 + Math.floor(r) : Math.floor(r);
            movePower = Math.max(1, r);
        } else if (moveName === "Heavy Slam" || moveName === "Heat Crash") {
            movePower = this.heavySlam(attackerWeight, defenderWeight);
        } else if (moveName === "Stored Power") {
            movePower = this.storedPower(this.attacker.boosts);
        } else if (moveName === "Flail" || moveName === "Reversal") {
            movePower = this.flail(this.attacker.currentHP, this.attacker.stat(Stats.HP));
        } else if (moveName === "Trump Card") {
            movePower = this.trumpPower(this.field.trumpPP);
        } else if (moveName === "Round" && this.field.roundBoost) {
            movePower *= 2;
        } else if (moveName === "Wake-Up Slap" && this.defender.status === Statuses.ASLEEP) {
            movePower *= 2;
        } else if (moveName === "Smelling Salts" && this.defender.status === Statuses.PARALYZED) {
            movePower *= 2;
        } else if ((moveName === "Twister" || moveName === "Gust") && this.field.fly) {
            movePower *= 2;
        } else if (moveName === "Beat Up") {
            movePower = Math.floor(this.field.beatUpStats[this.field.beatUpHit] / 10) + 5;
        } else if (moveName === "Hidden Power") {
            movePower = hiddenPowerP(this.attacker.ivs);
            moveType = hiddenPowerT(this.attacker.ivs);
        } else if (moveName === "Spit Up") {
            movePower = 100 * this.field.stockpile;
            if (movePower === 0) {
                return [0];
            }
        } else if (moveName === "Pursuit" && this.field.switchOut) {
            movePower *= 2;
        } else if (moveName === "Present") {
            movePower = this.field.present;
        } else if (moveName === "Natural Gift" && attackerItem.id >= 8000) {
            movePower = db.berryPower(atackerItem.id - 8000);
            moveType = db.berryType(atackerItem.id - 8000);
        } else if (moveName === "Magnitude") {
            movePower = this.magnitudePower(this.field.magnitude);
        } else if (moveName === "Rollout" || moveName === "Ice Ball") {
            movePower = 30 << (this.field.rollout%5 + this.field.defenseCurl);
        } else if (moveName === "Fling") {
            movePower = db.flingPower(attackerItem.id);
        } else if ((moveName === "Fire Pledge" || moveName === "Water Pledge" || moveName === "Grass Pledge") && this.field.pledgeBoost) {
            movePower *= 2;
        } else if (moveName === "Triple Kick") {
            movePower = 10 * this.field.tripleKickCount;
        } else if ((moveName === "Self-Destruct" || moveName === "Explosion") && dAbilityName === "Damp") {
            return [0];
        } else if (moveName === "Final Gambit") {
            return [this.attacker.currentHP];
        } else if (moveName === "Judgment" && this.attacker.item.plateType() !== -1) {
            moveType = this.attacker.item.plateType();
        }
        var gemBoost;
        if (moveType === attackerItem.gemType()) {
            attackerItem.id = 0;
            this.attackerItemUsed = true;
            gemBoost = true;
        }
        if (moveName === "Acrobatics") {
            if (aItemName === "(No Item)") { // gems are "used" earlier in calc and item set to 0
                movePower *= 2;
            }
        }
        
        var movePowerMod = 0x1000;
        if (aAbilityName === "Technician" && movePower<=60) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (aAbilityName === "Flare Boost" && this.attacker.status === Statuses.BURNED && this.move.damageClass() === DamageClasses.SPECIAL) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (aAbilityName === "Analytic" && this.field.targetMoved) {
            movePowerMod = this.chainMod(0x14CD, movePowerMod);
        }
        if (aAbilityName === "Reckless" && (moveName === "Jump Kick" || moveName === "High Jump Kick" || this.move.hasRecoil())) {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        }
        if (aAbilityName === "Iron Fist" && this.move.punch()) {
            movePowerMod = this.chainMod(0x1333, movePowerMod)
        }
        if (aAbilityName === "Toxic Boost" && (this.attacker.status === Statuses.POISONED || this.attacker.status === Statuses.BADLYPOISONED) && this.move.damageClass() === DamageClasses.PHYSICAL) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (aAbilityName === "Rivalry") {
            if (this.attacker.gender !== this.defender.gender && this.attacker.gender !== Genders.NOGENDER) {
                movePowerMod = this.chainMod(0x1400, movePowerMod);
            } else if (this.attacker.gender === this.defender.gender && this.attacker.gender !== Genders.NOGENDER) {
                movePowerMod = this.chainMod(0xC00, movePowerMod);
            }
        }
        if (aAbilityName === "Sand Force" && weather === Weathers.SAND && (moveType === Types.GROUND || moveType === Types.ROCK || moveType === Types.STEEL)) {
            movePowerMod = this.chainMod(0x14CD, movePowerMod)
        }
        if (aAbilityName === "Normalize") {
            moveType = 0;
        }
        if (dAbilityName === "Heatproof" && moveType === Types.FIRE) {
            movePowerMod = this.chainMod(0x800, movePowerMod);
        }
        if (dAbilityName === "Dry Skin" && moveType === Types.FIRE) {
            movePowerMod = this.chainMod(0x1400, movePowerMod);
        }
        if (aAbilityName === "Sheer Force" && this.move.sheerForce()) {
            movePowerMod = this.chainMod(0x14CD, movePowerMod);
        }
        if (attackerItem.typeBoosted() === moveType) {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        }
        if (aItemName === "Muscle Band" && this.move.damageClass() === DamageClasses.PHYSICAL) {
            movePowerMod = this.chainMod(0x1199, movePowerMod);
        }
        if (aItemName === "Lustrous Orb" && (moveType === Types.WATER || moveType === Types.DRAGON) && this.attacker.name() === "Palkia") {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        }
        if (aItemName === "Wise Glasses" && this.move.damageClass() === DamageClasses.SPECIAL) {
            movePowerMod = this.chainMod(0x1199, movePowerMod);
        }
        if (aItemName === "Griseous Orb" && (moveType === Types.GHOST || moveType === Types.DRAGON) && this.attacker.name() === "Giratina-O") {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        }
        if (gemBoost) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (aItemName === "Adamant Orb" && (moveType === Types.STEEL || moveType === Types.DRAGON) && this.attacker.name() === "Dialga") {
            movePowerMod = this.chainMod(0x1333, movePowerMod);
        }
        if (moveName === "Facade" && this.attacker.status !== Statuses.NOSTATUS) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if (moveName === "Brine" && this.defender.currentHP * 2 <= this.defender.stat(Stats.HP)) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if (moveName === "Venoshock" && (this.attacker.status === Statuses.POISONED || this.attacker.status === Statuses.BADLYPOISONED)) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if (moveName === "Retaliate" && this.field.previouslyFainted) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if ((moveName === "Fusion Bolt" && this.field.fusionFlare) || (moveName === "Fusion Flare" && this.field.fusionBolt)) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if (this.field.meFirst) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (moveName === "Solar Beam" && [Weathers.SUN, Weathers.CLEAR].indexOf(weather) < 0) {
            movePowerMod = this.chainMod(0x800, movePowerMod);
        }
        if (this.field.charge && moveType === Types.ELECTRIC) {
            movePowerMod = this.chainMod(0x2000, movePowerMod);
        }
        if (this.field.helpingHand) {
            movePowerMod = this.chainMod(0x1800, movePowerMod);
        }
        if (this.field.waterSport && moveType === Types.FIRE) {
            movePowerMod = this.chainMod(0x548, movePowerMod);
        }
        if (this.field.mudSport && moveType === Types.ELECTRIC) {
            movePowerMod = this.chainMod(0x548, movePowerMod);
        }
        movePower = Math.max(1, this.applyMod(movePowerMod, movePower));

        var _def = this.field.wonderRoom ? Stats.SDEF : Stats.DEF;
        var _sdef = this.field.wonderRoom ? Stats.DEF : Stats.SDEF;
        var unawareA = aAbilityName === "Unaware";
        var unawareD = dAbilityName === "Unaware";
        if (moveName === "Foul Play") {
            if (unawareA) {
                def = this.defender.stat(_def);
                sdef = this.defender.stat(_sdef);
                atk = this.defender.stat(Stats.ATK);
            } else {
                def = crit ? Math.min(this.defender.stat(_def), this.defender.boostedStat(_def))
                           : this.defender.boostedStat(_def);
                sdef = crit ? Math.min(this.defender.stat(_sdef), this.defender.boostedStat(_sdef))
                            : this.defender.boostedStat(_sdef);
                atk = crit ? Math.max(this.defender.stat(Stats.ATK), this.defender.boostedStat(Stats.ATK))
                           : this.defender.boostedStat(Stats.ATK);
            }
            if (unawareD) {
                satk = this.attacker.stat(Stats.SATK);
            } else {
                satk = crit ? Math.max(this.attacker.stat(Stats.SATK), this.attacker.boostedStat(Stats.SATK))
                            : this.attacker.boostedStat(Stats.SATK);
            }
        } else if (moveName === "Chip Away" || moveName === "Sacred Sword") {
            def = this.defender.stat(_def);
            sdef = this.defender.stat(_sdef);
            if (unawareD) {
                atk = this.attacker.stat(Stats.ATK);
                satk = this.attacker.stat(Stats.SATK);
            } else {
                atk = crit ? Math.max(this.attacker.stat(Stats.ATK), this.attacker.boostedStat(Stats.ATK))
                           : this.attacker.boostedStat(Stats.ATK);
                satk = crit ? Math.max(this.attacker.stat(Stats.SATK), this.attacker.boostedStat(Stats.SATK))
                            : this.attacker.boostedStat(Stats.SATK);
            }
        } else {
            if (unawareA) {
                def = this.defender.stat(_def);
                sdef = this.defender.stat(_sdef);
            } else {
                def = crit ? Math.min(this.defender.stat(_def), this.defender.boostedStat(_def)) : this.defender.boostedStat(_def);
                sdef = crit ? Math.min(this.defender.stat(_sdef), this.defender.boostedStat(_sdef)) : this.defender.boostedStat(_sdef);
            }
            if (unawareD) {
                atk = this.attacker.stat(Stats.ATK);
                satk = this.attacker.stat(Stats.SATK);
            } else {
                atk = crit ? Math.max(this.attacker.stat(Stats.ATK), this.attacker.boostedStat(Stats.ATK)) : this.attacker.boostedStat(Stats.ATK);
                satk = crit ? Math.max(this.attacker.stat(Stats.SATK), this.attacker.boostedStat(Stats.SATK)) : this.attacker.boostedStat(Stats.SATK);
            }
        }
        
        var atkMod = 0x1000, satkMod = 0x1000;
        if (dAbilityName === "Thick Fat" && (moveType === Types.FIRE || moveType === Types.ICE)) {
            atkMod = this.chainMod(0x800, atkMod);
            satkMod = this.chainMod(0x800, satkMod);
        }
        if (attackerAbility.pinchType() === moveType && this.attacker.stat(Stats.HP) >= this.attacker.currentHP * 3) {
            atkMod = this.chainMod(0x1800, atkMod); // blaze, torrent, overgrow, ...
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Guts" && this.defender.status !== Statuses.NOSTATUS) {
            atkMod = this.chainMod(0x1800, atkMod);
        }
        if ((aAbilityName === "Plus" && this.field.minus) || (aAbilityName === "Minus" && this.field.plus)) {
            atkMod = this.chainMod(0x1800, atkMod);
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Defeatist" && this.attacker.currentHP * 2 <= this.attacker.stat(Stats.HP)) {
            atkMod = this.chainMod(0x800, atkMod);
            satkMod = this.chainMod(0x800, satkMod);
        }
        if (aAbilityName === "Huge Power" || aAbilityName === "Pure Power") {
            atkMod = this.chainMod(0x2000, atkMod);
        }
        if (aAbilityName === "Solar Power" && weather === Weathers.SUN) {
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Hustle") {
            atk = this.applyMod(0x1800, atk);
        }
        if (aAbilityName === "Flash Fire" && this.field.flashFire && moveType === Types.FIRE) {
            atkMod = this.chainMod(0x1800, atkMod);
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aAbilityName === "Slow Start" && this.field.slowStart) {
            atkMod = this.chainMod(0x800, atkMod);
        }
        if (this.attacker.flowerGift && weather === Weathers.SUN) {
            atkMod = this.chainMod(0x1800, atkMod);
        }
        if (aItemName === "Thick Club" && (this.attacker.name() === "Cubone" || this.attacker.name() === "Marowak")) {
            atkMod = this.chainMod(0x2000, atkMod);
        }
        if (aItemName === "Deep Sea Tooth" && this.attacker.name() === "Clamperl") {
            satkMod = this.chainMod(0x2000, satkMod);
        }
        if (aItemName === "Light Ball" && this.attacker.name() === "Pikachu") {
            atkMod = this.chainMod(0x2000, atkMod);
            satkMod = this.chainMod(0x2000, satkMod);
        }
        if (aItemName === "Soul Dew" && (this.attacker.name() === "Latias" || this.attacker.name() === "Latios")) {
            satkMod = this.chainMod(0x1800, satkMod);
        }
        if (aItemName === "Choice Band") {
            atkMod = this.chainMod(0x1800, atkMod);
        }
        if (aItemName === "Choice Specs") {
            satkMod = this.chainMod(0x1800, satkMod);
        }
        atk = this.applyMod(atkMod, atk);
        satk = this.applyMod(satkMod, satk);
        
        if (weather === Weathers.SAND && (this.defender.type1() === Types.ROCK || this.defender.type2() === Types.ROCK)) {
            sdef = this.applyMod(0x1800, sdef);
        }
        var defMod = 0x1000, sdefMod = 0x1000;
        if (dAbilityName === "Marvel Scale" && this.defender.status !== Statuses.NOSTATUS) {
            defMod = this.chainMod(0x1800, defMod);
        }
        if (this.defender.flowerGift && weather === Weathers.SUN) {
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        if (dItemName === "Deep Sea Scale" && this.defender.name() === "Clamperl") {
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        if (dItemName === "Metal Powder" && this.defender.name() === "Ditto") {
            defMod = this.chainMod(0x2000, defMod);
        }
        if (dItemName === "Eviolite" && this.defender.hasEvolution()) {
            defMod = this.chainMod(0x1800, defMod);
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        if (dItemName === "Soul Dew" && (this.defender.name() === "Latias" || this.defender.name() === "Latios")) {
            sdefMod = this.chainMod(0x1800, sdefMod);
        }
        def = this.applyMod(defMod, def);
        sdef = this.applyMod(sdefMod, sdef);
        
        var a = 0, d = 0;
        if (moveName === "Psyshock" || moveName === "Psystrike" || moveName === "Secret Sword") {
            a = satk;
            d = def;
        } else if (this.move.damageClass() === DamageClasses.PHYSICAL) {
            a = atk;
            d = def;
        } else if (this.move.damageClass() === DamageClasses.SPECIAL) {
            a = satk;
            d = sdef;
        } else {
            return [0];
        }

        var baseDamage = Math.floor(Math.floor((Math.floor((2 * this.attacker.level) / 5) + 2) * movePower * a / d) / 50) + 2;

        if (this.field.multiBattle && this.move.multiTargets()) {
            baseDamage = this.applyMod(0xC00, baseDamage);
        }

        if (weather === Weathers.SUN) {
            if (moveType === Types.FIRE) {
                baseDamage = this.applyMod(0x1800, baseDamage);
            } else if (moveType === Types.WATER) {
                baseDamage = this.applyMod(0x800, baseDamage);
            }
        } else if (weather === Weathers.RAIN) {
            if (moveType === Types.WATER) {
                baseDamage = this.applyMod(0x1800, baseDamage);
            } else if (moveType === Types.FIRE) {
                baseDamage = this.applyMod(0x800, baseDamage);
            }
        }

        if (crit) {
            baseDamage = this.applyMod(0x2000, baseDamage);
        }

        var damages = [];
        for (var i = 0; i < 16; i++) {
            damages[i] = Math.floor(baseDamage * (85 + i) / 100);
        }

        if (this.attacker.stab(moveType)) {
            if (aAbilityName === "Adaptability") {
                damages = this.applyModA(0x2000, damages);
            } else {
                damages = this.applyModA(0x1800, damages);
            }
        }

        var eff = this.effective([moveType],
                                 [this.defender.type1(), this.defender.type2()],
                                 this.field.foresight || aAbilityName === "Scrappy",
                                 false);
        if (eff === 0 || moveType === defenderAbility.immunityType()) {
            return [0];
        }
        for (var i = 0; i < damages.length; i++) {
            damages[i] = (damages[i] * eff) >> 2;
        }

        if (this.attacker.status === Statuses.BURNED && this.move.damageClass() === DamageClasses.PHYSICAL && aAbilityName !== "Guts") {
            for (var i = 0; i < damages.length; i++) {
                damages[i] = damages[i] >> 1;
            }
        }

        for (var i = 0; i < damages.length; i++) {// ensure one damage
            damages[i] = damages[i] === 0 ? 1 : damages[i];
        }

        var finalMod = 0x1000;
        if (this.field.reflect && !crit
                               && (this.move.damageClass() === DamageClasses.PHYSICAL
                                   || moveName === "Psyshock"
                                   || moveName === "Psystrike"
                                   || moveName === "Secret Sword")
                               && aAbilityName !== "Infiltrator") {
            finalMod = this.chainMod(this.field.multiBattle ? 0xA8F : 0x800, finalMod);
        } else if (this.field.lightScreen && !crit
                                          && (this.move.damageClass() === DamageClasses.SPECIAL
                                              && !moveName === "Psyshock"
                                              && !moveName === "Psystrike"
                                              && !moveName === "Secret Sword")
                                          && aAbilityName !== "Infiltrator") {
            finalMod = this.chainMod(this.field.multiBattle ? 0xA8F : 0x800, finalMod);
        }
        if (dAbilityName === "Multiscale" && this.defender.currentHP === this.defender.stat(Stats.HP)) {
            finalMod = this.chainMod(0x800, finalMod);
        }
        if (aAbilityName === "Tinted Lens" && eff < 4) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        if (this.field.friendGuard) {
            finalMod = this.chainMod(0xC00, finalMod);
        }
        if (aAbilityName === "Sniper" && crit) {
            finalMod = this.chainMod(0x1800, finalMod);
        }
        if ((dAbilityName === "Filter" || dAbilityName === "Solid Rock") && eff > 4) {
            finalMod = this.chainMod(0xC00, finalMod);
        }
        if (aItemName === "Metronome") {
            finalMod = this.chainMod(this.field.metronome <= 4 ? (0x1000 + this.field.metronome * 0x333) : 0x2000, finalMod);
        }
        if (aItemName === "Expert Belt" && eff > 4) {
            finalMod = this.chainMod(0x1333, finalMod);
        }
        if (aItemName === "Life Orb") {
            finalMod = this.chainMod(0x14CC, finalMod);
        }
        if (defenderItem.berryType() === moveType && (eff > 4 || moveType === 0)) {
            finalMod = this.chainMod(0x800, finalMod);
            this.defenderItemUsed = true;
        }
        if (this.field.minimize && ["Stomp", "Steamroller"].indexOf(moveName) > -1) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        if (this.field.dig && ["Earthquake", "Magnitude"].indexOf(moveName) > -1) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        if (this.field.dive && ["Surf", "Whirlpool"].indexOf(moveName) > -1) {
            finalMod = this.chainMod(0x2000, finalMod);
        }
        this.applyModA(finalMod, damages);
        
        if (dAbilityName === "Sturdy" && this.defender.currentHP === this.defender.stat(Stats.HP)) {
            for (var i = 0; i < damages.length; i++) {
                damages[i] = Math.min(damages[i], this.defender.stat(Stats.HP) - 1);
            }
        }
        
        
        if (moveName === "Knock Off"
            && this.defender.item.name() !== "(No Item)"
            && !(this.defender.item.name() === "Griseous Orb" && this.defender.name().indexOf("Giratina") > -1)
            && !(this.defender.item.name().indexOf(" Drive") !== -1 && this.defender.name().indexOf("Genesect") > -1)
            && !(dAbilityName === "Multitype" && this.defender.item.name().indexOf(" Plate") > -1)) {
            this.defenderItemUsed = true;
        }
        
        return damages;
    }
    
    this.selCalc = function() {
        if (gen === 1) {
            return this.rby_calculate();
        } else if (gen === 2) {
            return this.gsc_calculate();
        } else if (gen === 3) {
            return this.adv_calculate();
        } else if (gen === 4) {
            return this.hgss_calculate();
        } else if (gen === 5) {
            return this.b2w2_calculate();
        } else if (gen === 6) {
            return this.oras_calculate();
        }
        return [0]; // ok
    }
    
    this.calculate = function() {
        if (this.move.name() === "(No Move)") {
            return new WeightedArray([0]);
        } else if (this.move.name() === "Triple Kick") {
            // Triple Kick hits three times; each time adding in power.
            var dmg = new WeightedArray([0]);
            var hits = [];
            for (var i = 0; i < 3; i++) {
                this.field.tripleKickCount = i + 1; // Determine which turn it is.
                hits[i] = new WeightedArray(this.selCalc()); // Let the gen's function figure out the base power and damage.
            }
            this.field.tripleKickCount = 1; // Reset count for next calculation.
            for (var i = 0; i < hits.length; i++) {
                dmg = dmg.combine(hits[i]); // Combine all three damages onto an array of a single "0 damage".
            }
            return dmg;
        } else if (this.move.name() === "Beat Up") {
            // It's the same idea as Triple Kick but with potentially more hits and possibly non-uniform damage changes.
            var dmg = new WeightedArray([0]);
            var hits = [];
            for (var i = 0; i < this.field.beatUpStats.length; i++) {
                this.field.beatUpHit = i;
                // Leave calculation to the gen's calc, the formula varies quite a bit over the generations.
                hits[i] = new WeightedArray(this.selCalc());
            }
            this.field.beatUpHit = 0;
            for (var i = 0; i < hits.length; i++) {
                dmg = dmg.combine(hits[i]);
            }
            return dmg;
        } else if (this.attacker.ability.name() === "Parental Bond"
                   && !(this.field.multiBattle && this.move.multiTargets())
                   && this.move.maxHits() === 1
                   && ["Fling", "Self-Destruct", "Explosion", "Final Gambit", "Endeavor"].indexOf(this.move.name()) < 0) {
            // Parental Bond has no effect on Multi Hit moves in all cases
            // or in Multiple Target moves during non-Singles battles
            // Fixed damage moves are still fixed. Psywave is calculated twice.
            // Fling, Self-Destruct, Explosion, Final Gambit, and Endeavor are excluded from the effect
            // Hits once at full power, and once at half power.
            var first = new WeightedArray(this.selCalc());
            this.field.parentalBond = true;
            var second = new WeightedArray(this.selCalc());
            this.field.parentalBond = false;
            return first.combine(second); // Combine the first with the second hit.
        } else if (this.move.maxHits() !== 1 && gen !== 1) {
            // Generic Multi Hit moves
            var dmg = new WeightedArray([0]);
            var tempdmg = new WeightedArray(this.selCalc());
            // Skill Link maxes out hits all Multi Hit moves
            var nHits = (this.attacker.ability.name() === "Skill Link") ? this.move.maxHits()
                                                                        : Math.min(this.move.maxHits(),
                                                                                   Math.max(this.move.minHits(),
                                                                                            this.field.multiHits));
            for (var i = 0; i < nHits; i++) { // Combine all the hits.
                dmg = dmg.combine(tempdmg);
                tempdmg = new WeightedArray(this.selCalc());
            }
            return dmg;
        } else if (this.move.maxHits() !== 1) {
            // Gen 1 Multi Hit moves function a little differently.
            // The randomization is only calculated once, and each hit during the current turn will deal a constant damage.
            var nHits = Math.min(this.move.maxHits(), Math.max(this.move.minHits(), this.field.multiHits)); // Check bounds.
            var tempArray = this.selCalc();
            for (var i = 0; i < tempArray.length; i++) { // Multiply all by the number of hits.
                tempArray[i] *= nHits;
            }
            return new WeightedArray(tempArray);
        }
        // Simple move; default case.
        return new WeightedArray(this.selCalc());
    }
}

// export it all as a "namespace"
return { Database : Database,
         db : db,
         gen : gen,
         Stats : Stats,
         Genders : Genders,
         DamageClasses : DamageClasses,
         Weathers : Weathers,
         Statuses : Statuses,
         Types : Types,
         Pokemon : Pokemon,
         Move : Move,
         Ability : Ability,
         Item : Item,
         Field : Field,
         Calculator : Calculator,
         hiddenPowerP : hiddenPowerP,
         hiddenPowerT : hiddenPowerT,
         hiddenPowerP2 : hiddenPowerP2,
         hiddenPowerT2 : hiddenPowerT2
       };
}());