function getValue() {

    var dictionary = { 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", 10: "¹⁰", 11: "¹¹", 12: "¹²", 13: "¹³", 14: "¹⁴" }
    var electron = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p", "6f", "7d", "7f"];
    var slm = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII" }
    var nle = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6, 14, 10, 14];

    var periodic = { "1": "H", "2": "He", "3": "Li", "4": "Be", "5": "B", "6": "C", "7": "N", "8": "O", "9": "F", "10": "Ne", "11": "Na", "12": "Mg", "13": "Al", "14": "Si", "15": "P", "16": "S", "17": "Cl", "18": "Ar", "19": "K", "20": "Ca", "21": "Sc", "22": "Ti", "23": "V", "24": "Cr", "25": "Mn", "26": "Fe", "27": "Co", "28": "Ni", "29": "Cu", "30": "Zn", "31": "Ga", "32": "Ge", "33": "As", "34": "Se", "35": "Br", "36": "Kr", "37": "Rb", "38": "Sr", "39": "Y", "40": "Zr", "41": "Nb", "42": "Mo", "43": "Tc", "44": "Ru", "45": "Rh", "46": "Pd", "47": "Ag", "48": "Cd", "49": "In", "50": "Sn", "51": "Sb", "52": "Te", "53": "I", "54": "Xe", "55": "Cs", "56": "Ba", "57": "La", "58": "Ce", "59": "Pr", "60": "Nd", "61": "Pm", "62": "Sm", "63": "Eu", "64": "Gd", "65": "Tb", "66": "Dy", "67": "Ho", "68": "Er", "69": "Tm", "70": "Yb", "71": "Lu", "72": "Hf", "73": "Ta", "74": "W", "75": "Re", "76": "Os", "77": "Ir", "78": "Pt", "79": "Au", "80": "Hg", "81": "Tl", "82": "Pb", "83": "Bi", "84": "Po", "85": "At", "86": "Rn", "87": "Fr", "88": "Ra", "89": "Ac", "90": "Th", "91": "Pa", "92": "U", "93": "Np", "94": "Pu", "95": "Am", "96": "Cm", "97": "Bk", "98": "Cf", "99": "Es", "100": "Fm", "101": "Md", "102": "No", "103": "Lr", "104": "Rf", "105": "Db", "106": "Sg", "107": "Bh", "108": "Hs", "109": "Mt", "110": "Ds", "111": "Rg", "112": "Cn", "113": "Nh", "114": "Fl", "115": "Mc", "116": "Lv", "117": "Ts", "118": "Og" };

    var ten_nguyento = { 1: "Hydrogen", 2: "Helium", 3: "Lithium", 4: "Beryllium", 5: "Boron", 6: "Carbon", 7: "Nitrogen", 8: "Oxygen", 9: "Fluorine", 10: "Neon", 11: "Sodium", 12: "Magnesium", 13: "Aluminum", 14: "Silicon", 15: "Phosphorus", 16: "Sulfur", 17: "Chlorine", 18: "Argon", 19: "Potassium", 20: "Calcium", 21: "Scandium", 22: "Titanium", 23: "Vanadium", 24: "Chromium", 25: "Manganese", 26: "Iron", 27: "Cobalt", 28: "Nickel", 29: "Copper", 30: "Zinc", 31: "Gallium", 32: "Germanium", 33: "Arsenic", 34: "Selenium", 35: "Bromine", 36: "Krypton", 37: "Rubidium", 38: "Strontium", 39: "Yttrium", 40: "Zirconium", 41: "Niobium", 42: "Molybdenum", 43: "Technetium", 44: "Ruthenium", 45: "Rhodium", 46: "Palladium", 47: "Silver", 48: "Cadmium", 49: "Indium", 50: "Tin", 51: "Antimony", 52: "Tellurium", 53: "Iodine", 54: "Xenon", 55: "Cesium", 56: "Barium", 57: "Lanthanum", 58: "Cerium", 59: "Praseodymium", 60: "Neodymium", 61: "Promethium", 62: "Samarium", 63: "Europium", 64: "Gadolinium", 65: "Terbium", 66: "Dysprosium", 67: "Holmium", 68: "Erbium", 69: "Thulium", 70: "Ytterbium", 71: "Lutetium", 72: "Hafnium", 73: "Tantalum", 74: "Tungsten", 75: "Rhenium", 76: "Osmium", 77: "Iridium", 78: "Platinum", 79: "Gold", 80: "Mercury", 81: "Thallium", 82: "Lead", 83: "Bismuth", 84: "Polonium", 85: "Astatine", 86: "Radon", 87: "Francium", 88: "Radium", 89: "Actinium", 90: "Thorium", 91: "Protactinium", 92: "Uranium", 93: "Neptunium", 94: "Plutonium", 95: "Americium", 96: "Curium", 97: "Berkelium", 98: "Californium", 99: "Einsteinium", 100: "Fermium", 101: "Mendelevium", 102: "Nobelium", 103: "Lawrencium", 104: "Rutherfordium", 105: "Dubnium", 106: "Seaborgium", 107: "Bohrium", 108: "Hassium", 109: "Meitnerium", 110: "Darmstadtium", 111: "Roentgenium", 112: "Copernicium", 113: "Nihonium", 114: "Flerovium", 115: "Moscovium", 116: "Livermorium", 117: "Tennessine", 118: "Oganesson" }
    atomic_masses = { 1: 1.00794, 2: 4.002602, 3: 6.941, 4: 9.012182, 5: 10.811, 6: 12.0107, 7: 14.00674, 8: 15.9994, 9: 18.9984032, 10: 20.183, 11: 22.98976928, 12: 24.305, 13: 26.9815386, 14: 28.0855, 15: 30.973762, 16: 32.065, 17: 35.453, 18: 39.948, 19: 39.0983, 20: 40.078, 21: 44.955912, 22: 47.867, 23: 50.9415, 24: 51.9961, 25: 54.938045, 26: 55.845, 27: 58.933195, 28: 58.6934, 29: 63.546, 30: 65.39, 31: 69.723, 32: 72.64, 33: 74.9216, 34: 78.96259, 35: 79.904, 36: 83.80, 37: 85.4678, 38: 87.62, 39: 88.90585, 40: 91.224, 41: 92.90638, 42: 95.94, 43: 97.9072, 44: 101.07, 45: 102.9055, 46: 106.42, 47: 107.8682, 48: 112.411, 49: 114.821, 50: 118.71, 51: 121.760, 52: 127.60, 53: 126.90447, 54: 131.293, 55: 132.90545, 56: 137.327, 57: 138.90547, 58: 140.116, 59: 140.90765, 60: 144.242, 61: 144.9127, 62: 150.36, 63: 151.964, 64: 157.25, 65: 158.92534, 66: 162.500, 67: 164.93032, 68: 167.259, 69: 168.93421, 70: 173.04, 70: 169.9, 71: 173.04, 72: 175.05, 73: 178.49, 74: 180.95, 75: 183.84, 76: 186.21, 77: 190.23, 78: 192.22, 79: 195.08, 80: 196.97, 81: 200.59, 82: 204.38, 83: 207.2, 84: 208.98, 85: 209.99, 86: 210.0, 87: 223.02, 88: 226.03, 89: 227.03, 90: 232.04, 91: 231.04, 92: 238.03, 93: 237.05, 94: 239.05, 95: 242.06, 96: 243.07, 97: 247.07, 98: 249.09, 99: 251.08, 100: 252.08, 101: 257.10, 102: 258.10, 103: 259.10, 104: 262.11, 105: 263.11, 106: 262.12, 107: 265.12, 108: 266.13, 109: 269.14, 110: 272.15, 111: 277.15, 112: 285.17 }
    var ky_hieu_nguyen_to = { "H": 1, "He": 2, "Li": 3, "Be": 4, "B": 5, "C": 6, "N": 7, "O": 8, "F": 9, "Ne": 10, "Na": 11, "Mg": 12, "Al": 13, "Si": 14, "P": 15, "S": 16, "Cl": 17, "Ar": 18, "K": 19, "Ca": 20, "Sc": 21, "Ti": 22, "V": 23, "Cr": 24, "Mn": 25, "Fe": 26, "Co": 27, "Ni": 28, "Cu": 29, "Zn": 30, "Ga": 31, "Ge": 32, "As": 33, "Se": 34, "Br": 35, "Kr": 36, "Rb": 37, "Sr": 38, "Y": 39, "Zr": 40, "Nb": 41, "Mo": 42, "Tc": 43, "Ru": 44, "Rh": 45, "Pd": 46, "Ag": 47, "Cd": 48, "In": 49, "Sn": 50, "Sb": 51, "Te": 52, "I": 53, "Xe": 54, "Cs": 55, "Ba": 56, "La": 57, "Ce": 58, "Pr": 59, "Nd": 60, "Pm": 61, "Sm": 62, "Eu": 63, "Gd": 64, "Tb": 65, "Dy": 66, "Ho": 67, "Er": 68, "Tm": 69, "Yb": 70, "Lu": 71, "Hf": 72, "Ta": 73, "W": 74, "Re": 75, "Os": 76, "Ir": 77, "Pt": 78, "Au": 79, "Hg": 80, "Tl": 81, "Pb": 82, "Bi": 83, "Po": 84, "At": 85, "Rn": 86, "Fr": 87, "Ra": 88, "Ac": 89, "Th": 90, "Pa": 91, "U": 92, "Np": 93, "Pu": 94, "Am": 95, "Cm": 96, "Bk": 97, "Cf": 98, "Es": 99, "Fm": 100, "Md": 101, "No": 102, "Lr": 103, "Rf": 104, "Db": 105, "Sg": 106, "Bh": 107, "Hs": 108, "Mt": 109, "Ds": 110, "Rg": 111, "Cn": 112 }
    var danh_sach = [];
    var xx = (document.getElementById("myInput").value);
    const genderRadio = document.querySelector("input[name='gender']:checked");
    var xz = genderRadio.value;
    if (xz == "1") {
        var Z = xx;
    }
    else {
        var Z = ky_hieu_nguyen_to[xx]
    }
    var E = Z;
    var ten_nto = periodic[Z];
    var nguyen_to = ten_nguyento[Z];
    if (typeof ten_nto == "undefined") {
        ten_nto = " ";
        nguyen_to = " ";
    }
    if (Z > 112) {
        ten_nto = "max"
        nguyen_to = " ";
    }
    if (E == 0 || E > 112) {
        document.getElementById("kpk").innerHTML = " ";
        document.getElementById("lst").innerHTML = " ";
        document.getElementById("che_gon").innerHTML = " ";
        document.getElementById("nhom").innerHTML = " ";
        document.getElementById("cky").innerHTML = " ";
        document.getElementById("ntkhoi").innerHTML = " ";
    }
    document.getElementById("ten_nto").innerHTML = nguyen_to;
    document.getElementById("nto").innerHTML = ten_nto;
    if (E != 24 && E != 29) {
        var class1 = [];
        var class2 = [];
        var class3 = [];
        var class4 = [];
        var class5 = [];
        var class6 = [];
        var class7 = []
        for (let i = 0; i <= 17; i++) {
            var I = 0;
            var y = electron[i];
            var x = nle[i];
            if (Z != 0) {
                for (let v = 0; v < x; v++) {
                    if (Z > 0) {
                        Z -= 1;
                        I += 1;
                    }
                }
                danh_sach.push(y + dictionary[I]);
            }
        }
        var stt_danh_sach = danh_sach.length;
        for (let i = 0; i < stt_danh_sach; i++) {
            element = danh_sach[i];
            if (element.includes('1')) {
                class1.push(element);
            }
            if (element.includes('2')) {
                class2.push(element);
            }
            if (element.includes('3')) {
                class3.push(element);
            }
            if (element.includes('4')) {
                class4.push(element);
            }
            if (element.includes('5')) {
                class5.push(element);
            }
            if (element.includes('6')) {
                class6.push(element);
            }
            if (element.includes('7')) {
                class7.push(element);
            }
        }
        var lst_main = class1.concat(class2, class3, class4, class5, class6, class7);
        var lst_main2 = lst_main;
    }
    else if (E == 24 || E == 29) {
        if (E == 24) {
            var class1 = ["1s²"];
            var class2 = ["2s²", "2p⁶"];
            var class3 = ["3s²", "3p⁶", "3d⁵"];
            var class4 = ["4s¹"];
            var class5 = [];
            var class6 = [];
            var class7 = [];
            var lst_main = class1.concat(class2, class3, class4, class5, class6, class7);
            var lst_main2 = lst_main;
        }
        else if (E == 29) {
            var class1 = ["1s²"];
            var class2 = ["2s²", "2p⁶"];
            var class3 = ["3s²", "3p⁶", "3d¹⁰"];
            var class4 = ["4s¹"];
            var class5 = [];
            var class6 = [];
            var class7 = [];
            var lst_main = class1.concat(class2, class3, class4, class5, class6, class7);
            var lst_main2 = lst_main;
        }
    }
    var lst_main3 = lst_main;
    function che_tg(x) {
        globalThis.lst_main;
        var lst_list = lst_main;
        var che_main;
        if (x <= 2) {
            return lst_list.join("");
        }
        else if (x > 2 && x <= 10) {
            lst_list.splice(0, 1);
            che_main = "[He]" + lst_list.join("");
            return che_main;
        }
        else if (x > 10 && x <= 18) {
            lst_list.splice(0, 3);
            che_main = "[Ne]" + lst_list.join("");
            return che_main;
        }
        else if (x > 18 && x <= 36) {
            lst_list.splice(0, 5);
            che_main = "[Ar]" + lst_list.join("");
            return che_main;
        }
        else if (x > 36 && x <= 54) {
            lst_list.splice(0, 8);
            che_main = "[Kr]" + lst_list.join("");
            return che_main;
        }
        else if (x > 54 && x <= 88) {
            lst_list.splice(0, 11);
            che_main = "[Xe]" + lst_list.join("");
            return che_main;
        }
        else if (x > 88 && x <= 118) {
            lst_list.splice(0, 12);
            che_main = "[Ra]" + lst_list.join("");
            return che_main;
        }
    }
    if (E <= 118) {
        var str_main = lst_main.join("");
    }
    else {
        var str_main = " ";
    }
    function ktra_e(x) {
        var y = [class1, class2, class3, class4, class5, class6, class7];
        var total = 0;
        var arr_y = y.filter((subarray) => subarray.length > 0);
        for (let i = 0; i < (arr_y[arr_y.length - 1]).length; i++) {
            for (let v = 1; v < 15; v++) {
                if ((arr_y[arr_y.length - 1])[i].includes(dictionary[v])) {
                    total += v;
                }
            }
        }
        if (E != 2 && E != 1) {
            if (total <= 3) {
                return "Kim loại";
            }
            else if (total != 4 && total <= 7) {
                return "Phi kim";
            }
            else if (total == 8) {
                return "Khí hiếm";
            }
            else if (total == 4) {
                if (E == 32 || E == 50 || E == 82) {
                    return "Kim loại";
                }
                else if (E == 6 || E == 14) {
                    return "Phi kim";
                }
            }
        } else {
            if (E == 2) {
                return "Khí hiếm";
            }
            else if (E == 1) {
                return "Phi kim";
            }
        }
    }
    function e_htri_A(x) {
        var loc_lst = (x.join(",")).split(",");
        if (E > 2) {
            var W = [loc_lst[loc_lst.length - 2], loc_lst[loc_lst.length - 1]];
            for (let i = 0; i < 22; i++) {
                if (W[0].includes(electron[i])) {
                    var gtr_e = nle[i];
                    for (let x = 1; x < 15; x++) {
                        if (W[0].includes(dictionary[x])) {
                            var gtr_x = x;
                        }
                    }
                }
            }
            if (gtr_x == gtr_e) {
                for (let i = 1; i < 15; i++) {
                    if (W[1].includes(dictionary[i])) {
                        return i;
                    }
                }
            }
            else {
                var k = 0;
                for (let x = 0; x < 2; x++) {
                    var gtr_lst = W[x];
                    for (let i = 1; i < 15; i++) {
                        if (gtr_lst.includes(dictionary[i])) {
                            k += i
                        }
                    }
                }
                return k;
            }
        }
        else {
            for (let i = 1; i < 15; i++) {
                if (loc_lst[0].includes(dictionary[i])) {
                    return i;
                }
            }
        }
    }
    function e_htri_B(x) {
        var loc_lst = (x.join(",")).split(",");
        var W = [loc_lst[loc_lst.length - 2], loc_lst[loc_lst.length - 1]];
        var k = 0;
        for (let x = 0; x < 2; x++) {
            var gtr_lst = W[x];
            for (let i = 1; i < 15; i++) {
                if (gtr_lst.includes(dictionary[i])) {
                    k += i
                }
            }
        }
        return k;
    }
    function group() {
        globalThis.lst_main3;
        globalThis.E
        var loc_lst = (lst_main3.join(",")).split(",");
        var W = [loc_lst[loc_lst.length - 2], loc_lst[loc_lst.length - 1]];
        if (E > 2) {
            if (W[0].includes("d") && W[1].includes("s")) {
                var hoa_tri_B = e_htri_B(lst_main3);
                if (hoa_tri_B <= 8) {
                    return slm[hoa_tri_B] + "B";
                }
                else {
                    if (W[0].includes("d¹⁰") && W[1].includes("s¹")) {
                        return "IB";
                    } else if (W[0].includes("d¹⁰") && W[1].includes("s²")) {
                        return "IIB";
                    }
                    else {
                        if (hoa_tri_B == 9) {
                            return "VIIIB cột 2";
                        } else if (hoa_tri_B == 10) {
                            return "VIIIB cột 3";
                        } else if (hoa_tri_B == 11) {
                            return "IB";
                        } else if (hoa_tri_B == 12) {
                            return "IIB";
                        }
                    }
                }
            }
            else {
                var hoa_tri_A = e_htri_A(lst_main3);
                return slm[hoa_tri_A] + "A";
            }
        }
        else {
            var hoa_tri_A = e_htri_A(lst_main3);
            return slm[hoa_tri_A] + "A";
        }
    }
    function chu_ky(x) {
        var lst = [class1, class2, class3, class4, class5, class6, class7];
        var loc_lst = lst.filter((subarray) => subarray.length > 0);
        return loc_lst.length;
    }
    function ntu_khoi(E) {
        return atomic_masses[E];
    }
    if (E > 0 && E <= 112) {
        document.getElementById("nhom").innerHTML = group();
        document.getElementById("kpk").innerHTML = ktra_e(lst_main2);
        document.getElementById("lst").innerHTML = str_main;
        document.getElementById("che_gon").innerHTML = che_tg(E);
        document.getElementById("cky").innerHTML = chu_ky();
        document.getElementById("ntkhoi").innerHTML = ntu_khoi(E);
    }
}

export default getValue