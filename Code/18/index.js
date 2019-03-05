
;(function() {
    /**
     * gender: 1(男)
     * gender: 0(女)
     * 
     * 根据用户传入的 性别、年龄区间 计算出体脂率
     * 
     * 如果 gender 为 falsy 值, 并且不包括 0, 那么返回 ""
     * 如果 age 为 falsy 值, 并且 age < 0 || age > 200, 那么返回 ""
     * 如果 value 为 falsy 值, 并且 value < 0, 那么返回 ""
     * 
     * 
     * 
     */

    // value, gender, age
    var getLevelForBodyfatrate = function (options) {};
    

    /**
     * 计算 BMI 值
     * BMI < 18.5: 偏低
     * 18.5 <= BMI < 23.9: 标准
     * 24.0 <= BMI < 27.0: 超重
     * BMI >= 28.0 肥胖, 
     * 
     * 根据输入值 BMI, 计算出当前值的等级
     * 四个等级
     * 
     * [0, 18.5):         偏低
     * [18.5, 23.9):      标准
     * [24.0, 27.0):      超重
     * [28.0, ):          肥胖
     * 
     * 当最后一个条件 BMI >= 28.0 时候, 使用表的方式不好处理, 单独拿出来处理
     * 
     * if value is falsy, or value of type not number, then return ''
     * if value < 0 or value > 100.0, then return ''
     * 
     * define table 
     * {
     *     bmiValue: level
     * }
     * 
     * 遍历这个表, value < key 当条件成立, 那么返回当前等级, 并跳出循环, 返回当前的等级
     * 
     */

    /**
     * 根据输入值 BMI, 计算出当前值的等级
     * 当最后一个条件 value >= 28.0 时候, 使用表的方式不好处理, 单独拿出来处理
     * 
     * BMI < 18.5:         偏低
     * 18.5 <= BMI < 23.9: 标准
     * 24.0 <= BMI < 27.9: 超重
     * BMI >= 28.0:        肥胖
     * 
     * 四个等级
     *
     * [0, 18.5):         偏低
     * [18.5, 23.9):      标准
     * [24.0, 27.0):      超重
     * [28.0, ):          肥胖
     */ 
    // var getLevelForBMI = function (value) {
    //     if (!value || typeof value !== 'number') { return ''; }

    //     var max = 28.0;
    //     var table = {
    //         '18.5': '偏低',
    //         '23.9': '标准',
    //         '27.9': '超重'
    //     };
    //     var keys = Object.keys(table);
    //     var i, len, item, level = '';

    //     for (i = 0, len = keys.length; i < len; i++) {
    //         item = keys[i];
    //         if (value < item) {
    //             level = table[item];
    //             break;
    //         }
    //     }

    //     if (value >= max) { level = '肥胖'; }

    //     return level;
    // };

    // 测试通过
    // ;(function() {
    //     var i, len;
    //     for (i = 0.1, len = 30; i < len; i+=0.1) {
    //         console.log(i + ':' + getLevelForBMI(i));
    //     }
    // })();

    // 测试 falsy: 通过
    // ;(function() {
    //     var falsy = [null, false, NaN, undefined, '', "", 0];
    //     var i, len;
    //     for (i = 0, len = falsy.length; i < len; i++) {
    //         console.log(getLevelForBMI(falsy[i]));
    //     }
    // })();

    

    /**
     * 根据输入值获取当前数值在哪个级别上(使用表驱动法的方式), 级别如下: 
     * (0-10]:   第一层
     * (10, 20]: 第二层
     * (20, 30]: 第三层
     * 
     * if number is falsy value, then return -1
     * if number type of not number type, then return -1
     * if number <= 0 or number > 30, then return -1
     * 
     * define step table, such as:
     * {
     *    key:   value
     *    level: number(biggest limit)
     * }
     * 
     * 遍历这个表, 当 输入值参数 < 表的value值(第一次), 那么返回当前的 key 值, 即等级
     * 
     */
    // var getNumberOfLevel = function (number) {
    //     // define error value is -1
    //     var errorValue = -1;
    //     var table = null;
    //     var keys = [];
    //     var i = len = -1;
    //     var level = -1;
    //     var min = 0, max = 100;

    //     // if number is falsy value, then return -1
    //     if (!number) { return errorValue; }

    //     // if number type of not number type, then return -1
    //     if (typeof number !== 'number') { return errorValue; }

    //     // if number < 0 or number > 30, then return -1
    //     if (number < min || number > max) { return errorValue; }

    //     // { level: number(biggest limit) }
    //     table = {
    //         '1': 10,
    //         '2': 20,
    //         '3': 30,
    //         '4': 40,
    //         '5': 50,
    //         '6': 60,
    //         '7': 70,
    //         '8': 80,
    //         '9': 90,
    //         '10': 100
    //     };

    //     // 遍历这个表, 当 输入值参数 < 表的value值(第一次), 那么返回当前的 key 值, 即等级
    //     keys = Object.keys(table);
        
    //     for (i = 0, len = keys.length; i < len; i++) {
    //         var value = table[keys[i]];
    //         if (number <= value) {
    //             level = keys[i];
    //             break;
    //         }
    //     }

    //     return level;
    // };
    

    /**
     * 根据输入值获取当前数值在哪个级别上, 级别如下: 
     * (0-10]:   第一层
     * (10, 20]: 第二层
     * (20, 30]: 第三层
     * 
     * if number is falsy value, then return -1
     * if number type of not number type, then return -1
     * if number <= 0 or number > 30, then return -1
     * 
     * if number <= 10, then return 1
     * 
     * else if number <= 20, then return 2
     * 
     * else return 3
     */

    // var getNumberOfLevel = function (number) {
    //     // define error value is -1
    //     var errorValue = -1;

    //     // if number is falsy value, then return -1
    //     if (!number) { return errorValue; }

    //     // if number type of not number type, then return -1
    //     if (typeof number !== 'number') { return errorValue; }

    //     // if number < 0 or number > 30, then return -1
    //     if (number < 0 || number > 30) { return errorValue; }

    //     // if number <= 10, then return 1
    //     // else if number <= 20, then return 2
    //     // else return 3
    //     if (number <= 10) {
    //         return 1;
    //     } else if (number <= 20) {
    //         return 2;
    //     } else if (number <= 30) {
    //         return 3;
    //     } else if (number <= 40) {
    //         return 4;
    //     } else if (number <= 50) {
    //         return 5;
    //     } else if (number <= 60) {
    //         return 6;
    //     } else if (number <= 70) {
    //         return 7;
    //     }
    // };

    // 测试 [0.1-10] 之间的值
    // for (var i = 90.1; i <= 100; i += 0.1) {
    //     console.log(getNumberOfLevel(i));
    // }

    // 测试 小于 0, 大于 30 的值
    // console.log(getNumberOfLevel(0));
    // console.log(getNumberOfLevel(30.1));

    // 测试类型值(不是 number 类型值)
    // ;(function() {
    //     var type = ['a', true];
    //     var i, len;

    //     for (i = 0, len = type.length; i < len; i++) {
    //         console.log(getNumberOfLevel(type[i]));
    //     }
    // })();
    

    // 测试 falsy 值
    // ;(function() {
    //     var falsy = [null, false, NaN, undefined, '', "", 0];

    //     var i, len;
    //     for (i = 0, len = falsy.length; i < len; i++) {
    //         console.log(getNumberOfLevel(falsy[i]));
    //     }
    // })();
    


    /**
     * 根据传入的 month 值, 计算出当月的天数
     * 
     * if month 值为 falsy,  then return -1
     * if month 值不是 number 类型, or month 不是在 [1-12] 之间, then return -1
     * 
     * define 一个月份数组, 里面存放 [1-12] 月的天数
     * 根据输入的值, 返回当前月对应的天数
     * 
     */

    // var getDaysForMonth = function (month) {
    //     // if month 值为 falsy, then return -1
    //     if (!month) { return -1; }

    //     // if month 值不是 number 类型, or month 不是在 [1-12] 之间, then return -1
    //     if (typeof month !== 'number' || !(1 <= month && month <= 12)) { return -1; }

    //     // define 一个月份数组, 里面存放 [1-12] 月的天数
    //     var monthArray = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //     // return 当前月的值
    //     return monthArray[month];
    // };

    // 测试 不是 number 类型
    // console.log(getDaysForMonth('asdasd'))
    // console.log(getDaysForMonth(2))

    // 测试 falsy 值
    // var falsy = [null, false, NaN, undefined, '', "", 0];
    // var i, len;
    // for (i = 0, len = falsy.length; i < len; i++) {
    //     console.log(getDaysForMonth(falsy[i]));
    // }


    /**
     * 当接收一个字符时, 判断该字符的类型, 并返回字符对应的类型
     * 已知字符类型有: [numbers, letters, punctuation]
     * 
     * 构建一个字符哈希表, 把三种类型都定义在一个表里面, 
     * 根据接收的参数值(key), 来直接访问表(value), 用来获取类型
     * 
     * 定义哈希表: charTable
     * key: 字符, value: 类型
     * {
     *    '0': 'number',
     *    '1': 'number',
     *    'a': 'letters',
     *    'b': 'letters',
     *    '!': 'punctuation',
     *    '~': 'punctuation',
     *    ...
     * }
     * 
     * 访问表:
     * charTable[inputChar]
     * 
     * if inputChar 未传递值(falsy值), and 不是 0 的时候, then 返回 -1
     * define defaultValue 默认值为 -1, 当表里没有匹配时, 返回默认值, 否则, 返回匹配值
     */
    
    // 设置字符表
    // var characterTable = {
    //     getCharacterType: function () {
    //         return ['number', 'letters', 'punctuation'];
    //     },
    //     // 构建字符表 [0-9a-zA-Z~!@#$%^&*(){}|":<>?]
    //     getCharacterTable: function () {
    //         var charTable = {},
    //             numberValues = this.getNumberTable(),
    //             letterValues = this.getLettersTable(),
    //             punctuationValues = this.getPunctuationTable();

    //         charTable = Object.assign({}, numberValues, letterValues, punctuationValues);

    //         return charTable;
    //     },
    //     // {'0': 'number'}
    //     getNumberTable: function() {
    //         var numberArray = [],
    //             numberObject = {},
    //             characterType = this.getCharacterType();

    //         for (var i = 0; i <= 9; i++) {
    //             numberArray.push(i);
    //         }

    //         for (var j = 0; j < numberArray.length; j++) {
    //             numberObject[j] = characterType[0];
    //         }
            
    //         return numberObject;
    //     },
    //     // {'a': 'letter'}
    //     getLettersTable: function() {
    //         var lettersArray = [],
    //             lettersObject = {},
    //             characterType = this.getCharacterType();

    //         // [a-z]
    //         for (var i = 97; i <= 122; i++) {
    //             var item = String.fromCharCode(i);
    //             lettersArray.push(item);
    //         }

    //         // [A-Z]
    //         for (var j = 65; j <= 90; j++) {
    //             var item = String.fromCharCode(j);
    //             lettersArray.push(item);
    //         }

    //         for (var k = 0; k < lettersArray.length; k++) {
    //             lettersObject[lettersArray[k]] = characterType[1];
    //         }

    //         return lettersObject;
    //     },
    //     // { '~': 'punctuation' }
    //     getPunctuationTable: function() {
    //         var punctuationArray = [],
    //             punctuationObject = {},
    //             characterType = this.getCharacterType();

    //         punctuationArray = String('~!@#$%^&*(){}|":<>?').split('');

    //         for (var i = 0; i < punctuationArray.length; i++) {
    //             punctuationObject[punctuationArray[i]] = characterType[2];
    //         }

    //         return punctuationObject;
    //     }
    // };

    // var getCharacterType = function (inputChar) {
    //     var defaultValue = -1,
    //         characterTableObject = characterTable.getCharacterTable();

    //     if (!inputChar && inputChar !== 0) {
    //         return defaultValue;
    //     }

    //     defaultValue = characterTableObject[inputChar];

    //     return defaultValue;
    // };

    // console.log(getCharacterType(1));

    // 构建表
    // var setCharacterTable = function () {
    //     var charTable = null,
    //         numberValues = [],
    //         letterValues = [],
    //         punctuationValues = [],
    //         charType = ['number', 'letters', 'punctuation'];

    //     // [0-9]
    //     for (var i = 0; i <= 9; i++) {
    //         numberValues.push(i);
    //     }

    //     // [a-z]
    //     for (var j = 97, jlen = 122; j <= jlen; j++) {
    //         var item = String.fromCharCode(j);
    //         letterValues.push(item);
    //     }

    //     // [A-Z]
    //     for (var k = 65, klen = 90; k <= klen; k++) {
    //         var item = String.fromCharCode(k);
    //         letterValues.push(item);
    //     }

    //     // [~!@#$%^&*(){}|":<>?]
    //     punctuationValues = String('~!@#$%^&*(){}|":<>?').split('');

        
    // };

    // setCharacterTable();



    


    /**
     * 数字、标点符号、字母
     * 
     * 接收一个任意字符, 判断该字符的类型, 并返回字符的类型
     * 
     * if inputChar is false value, but not includes 0, then  return -1
     * define 类型值 typeValue = -1, 用于显示类型值
     * 
     * if inputChar in [0-9], then return 1, number type.
     * 
     * if inputChar in [a-zA-Z], then return 2, letters type.
     * 
     * if inputChar in [~!@#$%^&*(){}|":<>?], then return 3, punctuation type.
     * 
     */

    // var getCharacterType = function (inputChar) {
    //     // if inputChar is false value, but not includes 0, then  return -1
    //     if (!inputChar && inputChar !== 0) { return -1; }

    //     // define 类型值 typeValue = -1, 用于显示类型值
    //     var typeValue = -1;

    //     // if inputChar in [0-9], then return 1, number type.
    //     if (/[0-9]/.test(inputChar)) { return 1; }

    //     // if inputChar in [a-zA-Z], then return 2, letters type.
    //     if (/[a-zA-Z]/.test(inputChar)) { return 2; }

    //     // if inputChar in [~!@#$%^&*(){}|":<>?], then return 3, punctuation type.
    //     if (/[~!@#$%^&*(){}|":<>?]/.test(inputChar)) { return 3; }

    //     return typeValue;
    // };

    // 测试
    // 不传参数测试
    // console.log(getCharacterType());

    // falsy 值测试 null, false, 0, NaN undefined, '', "": 通过
    // ;(function() {
    //     var falsy = [null, false, NaN, undefined, '', ""];
    //     var i = len = item = -1;
    //     for (i = 0, len = falsy.length; i < len; i++) {
    //         item = falsy[i];
    //         console.log(getCharacterType(item));
    //     }
    // })();
    

    // 0-9 测试: 测试通过
    // ;(function() {
    //     var numers = (function () {
    //         var i = item = -1, len = 9, numberArray = [];
    //         for (i = 0; i <= len; i++) {
    //             numberArray.push(i);
    //         }
    //         return numberArray;
    //     })();

    //     var i, len, item;
    //     for (i = 0, len = numers.length; i < len; i++) {
    //         item = numers[i];
    //         console.log(getCharacterType(item));
    //     }
    // })();

    // [a-zA-Z] 测试 97-122: a-z, 65-90: A-Z
    // ; (function () {
    //     var letters = (function () {
    //         var i, len, j, jlen, lettersArray = [];
    //         for (i = 97, len = 122; i <= len; i++) {
    //             var item = String.fromCharCode(i);
    //             lettersArray.push(item);
    //         }

    //         for (j = 65, jlen = 90; j <= jlen; j++) {
    //             var item = String.fromCharCode(j);
    //             lettersArray.push(item);
    //         }

    //         return lettersArray;
    //     })();

    //     var i, len = letters.length;
    //     for (i = 0; i < len; i++) {
    //         var item = letters[i];
    //         console.log(getCharacterType(item));
    //     }
    // })();

    // [~!@#$%^&*(){}|":<>?] 测试
    // ;(function() {
    //     var punctuationStr = '~!@#$%^&*(){}|":<>?';
    //     var punctuationArray = punctuationStr.split('');

    //     var i, len, item;
    //     for (i = 0, len = punctuationArray.length; i < len; i++) {
    //         item = punctuationArray[i];
    //         console.log(getCharacterType(item));
    //     }
    // })();
































    const MAN = '1';
    const WOMAN = '2';
    const FLAT = '偏低';
    const STANDARD = '标准';
    const HIGH_SIDE = '偏高';
    const HIGH = '高';
    const OVERLOAD = '超重';
    const FAT = '肥胖';
    const OK = '达标';
    const NO = '未达标';
    const ERROR_VALUE = '值参数异常';
    const ERROR_GENDER = '性别参数异常';
    const ERROR_AGE = '年龄参数异常';
    const ERROR_M = '体重参数异常';

    var getAge = function (age) {
        return Math.min(66, age);
        // return Math.max(Math.min(66, age), 17);
    };

    // console.log(getAge(10));

    // var getBMI = function (val) {
    //     if (val < 18.5) {
    //         return FLAT;
    //     } else if (18.5 <= val && val < 23.9) {
    //         return STANDARD;
    //     } else if (24.0 <= val && val < 27.9) {
    //         return OVERLOAD;
    //     } else if (28.0 <= val) {
    //         return FAT;
    //     } else {
    //         return ERROR_VALUE;
    //     }
    // };

    // 索引->键值->主表信息
    var getScore = function (score) {
        var range = [50.0, 65.0, 75.0, 90.0, 100.0];
        var grade = ['F', 'D', 'C', 'B', 'A'];
        var maxGradeLevel = grade.length - 1;
        var gradeLevel = 0;
        var studentGrade = 'A';

        while ((studentGrade === 'A') && (gradeLevel < maxGradeLevel)) {
            if (score < range[gradeLevel]) {
                studentGrade = grade[gradeLevel];
            }
            gradeLevel += 1;
        }

        return studentGrade;
    };

    // console.log(getScore(50));

    // var arrA = ['0001', '0002', '0003'];
    // var arrB = { '0001': '电脑', '0002': '水杯', '0003': '鼠标' };

    // console.log(arrB['0001']); 

    // var arrA = ['A', 'B', 'C', 'D'];
    // var arrB = { 'A': 'XFJ', 'B': 'MMX', 'C': 'WMJ', 'D': 'YY' };

    // console.log(arrB[arrA[1]]); 

    // 获取体脂率 男/女
    var getBodyfatrateForMan = function (val, age) {
        if (age < 30) {
            if (val < 10) {
                return FLAT;
            } else if (10 <= val && val < 21) {
                return STANDARD;
            } else if (21 <= val && val < 26) {
                return HIGH_SIDE;
            } else if (26 <= val) {
                return HIGH;
            } else {
                return ERROR_VALUE;
            }
        } else if (age >= 30) {
            if (val < 11) {
                return FLAT;
            } else if (11 <= val && val < 22) {
                return STANDARD;
            } else if (22 <= val && val < 27) {
                return HIGH_SIDE;
            } else if (27 <= val) {
                return HIGH;
            } else {
                return ERROR_VALUE;
            }
        } else {
            return ERROR_AGE;
        }
    }


    var getBodyfatrateForWoman = function (val, age) {
        if (age < 30) {
            if (val < 16) {
                return FLAT;
            } else if (16 <= val && val < 24) {
                return STANDARD;
            } else if (24 <= val && val < 30) {
                return HIGH_SIDE;
            } else if (30 <= val) {
                return HIGH;
            } else {
                return ERROR_VALUE;
            }
        } else if (age >= 30) {
            if (val < 19) {
                return FLAT;
            } else if (19 <= val && val < 27) {
                return STANDARD;
            } else if (27 <= val && val < 30) {
                return HIGH_SIDE;
            } else if (30 <= val) {
                return HIGH;
            } else {
                return ERROR_VALUE;
            }
        } else {
            return ERROR_AGE;
        }
    }

    // 获取体脂率
    var getBodyfatrate = function (val, gender, age) {
        if (gender === MAN) {
            return getBodyfatrateForMan(val, age);
        } else if (gender === WOMAN) {
            return getBodyfatrateForWOMAN(val, age);
        } else {
            return '性别异常';
        }
    }

    // 体脂率表
    var getBodyFatrate = function (gender, age) {
        var bodyFatrateTable = {
            man: {
                '30': {
                    [FLAT]: 10,
                    [STANDARD]: 21,
                    [HIGH_SIDE]: 26,
                    [HIGH]: 100
                },
                '100': {
                    [FLAT]: 11,
                    [STANDARD]: 22,
                    [HIGH_SIDE]: 27,
                    [HIGH]: 100,
                }
            }
        };
        var keys = [], level = 'ERROR';

        if (gender === 'man') {
            keys = Object.keys(bodyFatrateTable[gender]);
        } else if (gender === 'woman') {
            keys = Object.keys(bodyFatrateTable[gender]);
        }

        for (var i = 0; i < keys.length; i++) {
            var item = bodyFatrateTable[gender][keys[i]];
            if (age < item) {
                console.log(keys);
                // level = keys[i];
                // break;
            }
        }

        // return level;
    };

    // console.log(getBodyFatrate('man', 10));
    



    // 获取 BMI 值优化
    // var getBMI = function (val) {
    //     var BMITable = {
    //         [FLAT]: 18.5,
    //         [STANDARD]: 23.9,
    //         [OVERLOAD]: 27.9,
    //         [FAT]: 100
    //     };
    //     var keys = Object.keys(BMITable);
    //     var level = '值参数异常';

    //     return function() {
    //         for (var i = 0; i < keys.length; i++) {
    //             var item = BMITable[keys[i]];
    //             if (val < item) {
    //                 level = keys[i];
    //                 break;
    //             }
    //         }
    //         return level;
    //     }();
        
    // };

    // console.log(getBMI(18.5)); 
    







    /* Moudle 阶梯访问表 分数区间
    ----------------------------------------------------- */
    // var getLevelByScore = function (score) {
    //     var item = -1, i = -1, level = 'ERROR';
    //     var scoreTable = {
    //         'F': 50,
    //         'D': 65,
    //         'C': 75,
    //         'B': 90,
    //         'A': 100
    //     };
    //     var keys = Object.keys(scoreTable);

    //     for (i = 0; i < keys.length; i++) {
    //         item = scoreTable[keys[i]];
    //         if (score < item) {
    //             level = keys[i];
    //             break;
    //         }
    //     }

    //     return level;
    // };

    // var getLevelByScore = function (score) {
    //     var item = -1, i = -1, level = 'ERROR';
    //     var scoreTable = {
    //         'F': 50,
    //         'D': 65,
    //         'C': 75,
    //         'B': 90,
    //         'A': 100.1
    //     };
    //     var keys = Object.keys(scoreTable);
    
    //     for (i = 0; i < keys.length; i++) {
    //         item = scoreTable[keys[i]];
    //         if (score < item) {
    //             level = keys[i];
    //             break;
    //         }
    //     }
    
    //     return level;
    // };
    
    // console.log(getLevelByScore(100));

    // console.log(getLevelByScore(101));



    /* Moudle 保险费率表
    ----------------------------------------------------- */

    // if (gender === '男') {
    //     if (maritalStatus === '单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             }
    //             ageArr[age][0];
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     } else if (maritalStatus === '不单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     } else {
    //         console.log('单身异常');
    //     }
    // } else if (gender === '女') {
    //     if (maritalStatus === '单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     } else if (maritalStatus === '不单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     }
    // } else {
    //     console.log('性别异常...');
    // }

    // 第四层面 根据性别、是否单身、是否吸烟、年龄获取保险费率, 越来越复杂
    // if (gender === 'man') {
    //     if (single === 'yes') {
    //         if (smoking === 'yes') {
    //             if (age < 18) {
    //                 rate = 200;
    //             } else if (age === 19) {
    //                 rate = 250;
    //             } else if (age === 20) {
    //                 rate = 300;
    //             } else if (age > 21) {
    //                 rate = 350;
    //             }
    //         }
    //     }
    // }

    // var rateTable = {
    //     man: {
    //         singleYes: {
    //             smokingYes: {
    //                 '17': 200,
    //                 '19': 250,
    //                 '20': 300,
    //                 '22': 350
    //             },
    //             smokingNo: {
    //                 '17': 200,
    //                 '19': 250,
    //                 '20': 300,
    //                 '22': 350
    //             }
    //         }
    //     }
    // };

    // console.log(rateTable['man']['singleYes']['smokingYes']['20']); 


    // 第三层面 根据性别、是否单身、年龄获取保险费率
    // if (gender === 'man') {
    //     if (single === 'yes') {
    //         if (age < 18) {
    //             rate = 200;
    //         } else if (age === 19) {
    //             rate = 250;
    //         } else if (age === 20) {
    //             rate = 300;
    //         } else if (age > 21) {
    //             rate = 350;
    //         }
    //     } else if (single === 'no') {
    //         if (age < 18) {
    //             rate = 250;
    //         } else if (age === 19) {
    //             rate = 300;
    //         } else if (age === 20) {
    //             rate = 350;
    //         } else if (age > 21) {
    //             rate = 400;
    //         }
    //     }
    // } else if (gender === 'woman') {
    //     if (single === 'yes') {
    //         if (age < 18) {
    //             rate = 200;
    //         } else if (age === 19) {
    //             rate = 250;
    //         } else if (age === 20) {
    //             rate = 300;
    //         } else if (age > 21) {
    //             rate = 350;
    //         }
    //     } else if (single === 'no') {
    //         if (age < 18) {
    //             rate = 250;
    //         } else if (age === 19) {
    //             rate = 300;
    //         } else if (age === 20) {
    //             rate = 350;
    //         } else if (age > 21) {
    //             rate = 400;
    //         }
    //     }
    // }

    // var rateTable = {
    //     man: {
    //         singleYes: {
    //             '17': 200,
    //             '19': 250,
    //             '20': 300,
    //             '22': 350
    //         },
    //         singleNo: {
    //             '17': 220,
    //             '19': 230,
    //             '20': 340,
    //             '22': 350
    //         }
    //     },
    //     woman: {
    //         singleYes: {
    //             '17': 200,
    //             '19': 250,
    //             '20': 300,
    //             '22': 350
    //         },
    //         singleNo: {
    //             '17': 220,
    //             '19': 230,
    //             '20': 340,
    //             '22': 350
    //         }
    //     }
    // };

    // console.log(rateTable['woman']['singleYes']['22']); 

    // 第二层面 根据性别、年龄获取保险费率
    // if (gender === '男') {
        // if (age < 18) {
        //     rate = 200;
        // } else if (age === 19) {
        //     rate = 250;
        // } else if (age === 20) {
        //     rate = 300;
        // } else if (age > 21) {
        //     rate = 350;
        // }
    // } else if (gender === '女') {
        // if (age < 18) {
        //     rate = 250;
        // } else if (age === 19) {
        //     rate = 300;
        // } else if (age === 20) {
        //     rate = 350;
        // } else if (age > 21) {
        //     rate = 400;
        // }
    // }

    // var rateTable = {
    //     'man': {
    //         '17': 200,
    //         '19': 250,
    //         '20': 300,
    //         '22': 350
    //     },
    //     'woman': {
    //         '17': 250,
    //         '19': 300,
    //         '20': 350,
    //         '22': 400
    //     }
    // };

    // console.log(rateTable['woman']['22']); 


    // 第一层面
    // if (age < 18) {
    //     rate = 200;
    // } else if (age === 19) {
    //     rate = 250;
    // } else if (age === 20) {
    //     rate = 300;
    // } else if (age > 21) {
    //     rate = 350;
    // }

    // // 表怎么定义, 那么 (age < 18岁) 和 (age > 21岁) 的怎么定义?
    // var getRateTable = function (age) {
    //     var rateTable = {
    //         '17': 200,
    //         '19': 250,
    //         '20': 300,
    //         '22': 350
    //     };

    //     return function() {
    //         if (age < 18) {
    //             return rateTable['17'];
    //         }
    //         if (age > 21) {
    //             return rateTable['22'];
    //         }
    //         return rateTable[age];
    //     }();
    // };
    

    // // 表怎么访问
    // console.log(getRateTable(100));
    // console.log(rateTable[19]); 

    /* Moudle 年月日表
    ----------------------------------------------------- */

    // var leapYearIndex = function (year) {
    //     year = year || new Date().getFullYear();
    //     var cond1 = year % 4 === 0;
    //     var cond2 = year % 100 !== 0;
    //     var cond3 = year % 400 === 0;
    //     var cond = cond1 && cond2 || cond3;
    //     return cond ? 1 : 0;
    // };

    // var getDaysForMonth = function (month, leapYearIndex) {
    //     var getDaysForMonthTable = [31, (leapYearIndex === 1 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //     // 此处利用闭包, 不会每次求值 table 里面的值
    //     return function () {
    //         return getDaysForMonthTable[month - 1];
    //     }();
    // };

    // console.log(getDaysForMonth(2, leapYearIndex()));



    /* Moudle 判断字符表
    ----------------------------------------------------- */

    // var getCharType = function (char) {
    //     if ((('a' <= char) && (char <= 'z')) || (('A' <= char) && (char <= 'Z'))) {
    //         console.log('字母类型');
    //     } else if ((char === ',') || (char === '.') || (char === '?') || (char === '/')) {
    //         console.log('字符类型');
    //     } else if (0 <= char && char <= 9) {
    //         console.log('数字类型');
    //     } else {
    //         console.log('其他类型');
    //     }
    // };

    // var charType = {
    //     letter: '字母类型',
    //     punctuation: '字符类型',
    //     digit: '数字类型'
    // };

    // var charTypeTable = {
    //     'a': charType.letter,
    //     'b': charType.letter,
    //     'c': charType.letter,
    //     ',': charType.punctuation,
    //     '!': charType.punctuation,
    //     '?': charType.punctuation,
    //     '/': charType.punctuation,
    //     '0': charType.digit,
    //     '1': charType.digit,
    //     '2': charType.digit,
    //     '3': charType.digit
    // };

    // console.log(charTypeTable['0']); 
})();