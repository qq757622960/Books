/** 
 * @Author: YISHI 
 * @Date:   2019-03-12 14:42:09 
 * @Desc:   身体健康率计算
 */


/**
 * 注意点:
 * 先分析好, 再写
 * 写完最后再优化, 忘记完美
 * 
 * healthyRate:  计算身体健康率对象
 * healthyTable: 计算身体健康率表
 * 
 * 参数: (value)
 * getLevelForBMI: 计算 BMI                 ['偏低', '标准', '超重', '肥胖'], [18.5, 23.9, 27.9, 100]
 * getLevelForNOF: 计算内脏脂肪数             ['标准', '偏高', '高'], [9, 14, 100]
 * 
 * 参数 (value, gender)
 * getLevelForROM: 获取肌肉率                
 * [0, 1] => ['女', '男'] [[['偏低', '标准', '偏高'], [30, 50, 100]], [['偏低', '标准', '偏高'], [40, 60, 100]]]
 * 
 * 女: ['偏低', '标准', '偏高'], [30, 50, 100]
 * 男: ['偏低', '标准', '偏高'], [40, 60, 100]
 * 
 * getLevelForTM:  计算水份
 * 女: ['偏低', '标准', '偏高'], [45, 60, 100]
 * 男: ['偏低', '标准', '偏高'], [55, 65, 100]
 * 
 * getLevelForProtein: 计算蛋白质含量
 * 女: ['偏低', '标准', '偏高'], [14, 16.1, 100]
 * 男: ['偏低', '标准', '偏高'], [16, 18.1, 100]
 * 
 * 参数 (value, gender, age)
 * getLevelForBFR: 计算体脂率
 * 
 * [0, 1] => ['女', '男']
 * [[2, 9, 17, 29], [2, 9, 17, 29]]
 * 
 * [30, 100]
 * [16, 24, 30, 100], ['偏低', '标准', '偏高', '高']
 * [19, 27, 30, 100], ['偏低', '标准', '偏高', '高']
 * 
 * [30, 100]
 * [10, 21, 26, 100], ['偏低', '标准', '偏高', '高']
 * [11, 22, 27, 100], ['偏低', '标准', '偏高', '高']
 * 
 * getLevelForBMR: 计算基础代谢率
 * 
 * 参数 (value, gender, weight)
 * getLevelForBIH: 计算骨重
 */

var healthyRate = {
    // 阶梯访问表通用函数
    getLevelForRange: function(value, grade, rangeLimit) {
        if (!value) { return ''; }

        var i = 0, length = rangeLimit.length, 
            level = '', item,
            value = +value;
        
        for (; i < length; i++) {
            item = rangeLimit[i];
            if (value < item) {
                level = grade[i];
                break;
            }
        }

        return level;
    },
    // 获取 grade 和 rangeLimit
    getGradeAndRangeLimit: function(table, compareValue) {
        if (!compareValue) { return false; }

        var keys = Object.keys(table),
            compareValue = +compareValue, compareItem, 
            i = 0, length = keys.length, gradeAndRangeObject = null;

        for (; i < length; i++) {
            compareItem = keys[i];
            if (compareValue < compareItem) {
                gradeAndRangeObject = table[compareItem];
                break;
            }
        }

        return gradeAndRangeObject;
    },
    // 计算 BMI
    getLevelForBMI: function(value) {
        return this.getLevelForRange(
                value,
                healthyTable.bmi.grade, 
                healthyTable.bmi.rangeLimit
        );
    },
    // 计算内脏脂肪数
    getLevelForNOF: function (value) {
        return this.getLevelForRange(
                value, 
                healthyTable.nof.grade, 
                healthyTable.nof.rangeLimit
        );
    },
    // 计算肌肉率
    getLevelForROM: function (value, gender) {
        return this.getLevelForRange(
            value,
            healthyTable.rom[+gender]['grade'],
            healthyTable.rom[+gender]['rangeLimit']
        );
    },
    // 计算水份
    getLevelForTM: function (value, gender) {
        return this.getLevelForRange(
            value,
            healthyTable.tm[+gender]['grade'],
            healthyTable.tm[+gender]['rangeLimit']
        );
    },
    // 计算蛋白质含量
    getLevelForProtein: function (value, gender) {
        return this.getLevelForRange(
            value,
            healthyTable.protein[+gender]['grade'],
            healthyTable.protein[+gender]['rangeLimit']
        );
    },
    // 计算骨重
    getLevelForBIH: function (value, gender, weight) {
        var table = healthyTable.bih[+gender],
            gradeAndRangeObject = this.getGradeAndRangeLimit(table, weight);

        if (!gradeAndRangeObject) { return ''; }

        return this.getLevelForRange(
            value,
            gradeAndRangeObject.grade,
            gradeAndRangeObject.rangeLimit
        );
    },
    // 计算体脂率
    getLevelForBFR: function (value, gender, age) {
        var table = healthyTable.bfr[+gender],
            gradeAndRangeObject = this.getGradeAndRangeLimit(table, age);
        
        if (!gradeAndRangeObject) { return ''; }

        return this.getLevelForRange(
            value, 
            gradeAndRangeObject.grade,
            gradeAndRangeObject.rangeLimit
        );
    },
    // 计算基础代谢率
    getLevelForBMR: function (value, gender, weight, age) {
        if (!value || !age || !weight) { return ''; }

        var bmrTable = healthyTable.bmr(+weight),
            genderTable = bmrTable[+gender],
            ageKeys = Object.keys(genderTable),
            i = 0, length = ageKeys.length, 
            age = +age, value = +value, item, level = '未达标';

        for (; i < length; i++) {
            item = ageKeys[i];
            if (age <= item) {
                if (value >= genderTable[item]) {
                    level = '达标';
                }
                break;
            }
        }

        return level;
    }
};

// 测试基础代谢率 
// ;(function() {
    // 测试 0-2 岁, 男, 体重是 20KG, value 值是 1100
    // console.log(healthyRate.getLevelForBMR('1150', '0', '20', 2));
    // 测试 0-2 岁, 男, 体重是 20KG, value 值是 1200
    // console.log(healthyRate.getLevelForBMR('1200', '1', '20', 2));
// })();


// getLevelForBIH
// 测试骨重
// ;(function() {
//     for (var i = 0; i < 101; i += 0.1) {
//         // console.log(i + ': ' + healthyRate.getLevelForBIH(i + '', '1', '59')); // 测试男体重60KG以下
//         // console.log(i + ': ' + healthyRate.getLevelForBIH(i + '', '1', '60')); // 测试男体重60KG以上
//         // console.log(i + ': ' + healthyRate.getLevelForBIH(i + '', '0', '44')); // 测试女体重45KG以下
//         // console.log(i + ': ' + healthyRate.getLevelForBIH(i + '', '0', '45'));   // 测试女体重45KG以上
//     }
// })();

// console.log(healthyRate.getLevelForBFR(10, '1', '')); // 测试男30岁以上, falsy 值

// 测试体脂率, 根据值获取, 测试成功
// ;(function() {
    // for (var i = 0; i < 101; i++) {
    //     // console.log(i + ': ' + healthyRate.getLevelForBFR(i + '', '1', '30')); // 测试男30岁以上
    //     // console.log(i + ': ' + healthyRate.getLevelForBFR(i + '', '1', '29')); // 测试男30岁以下
    //     // console.log(i + ': ' + healthyRate.getLevelForBFR(i + '', '0', '29')); // 测试女30岁以下
    //     // console.log(i + ': ' + healthyRate.getLevelForBFR(i + '', '0', '30'));   // 测试女30岁以上
    // }
// })();

// 计算体脂率, 获取 grade、rangeLimit 测试成功
// ;(function() {
//     healthyRate.getLevelForBFR(0, '0', '29');
//     healthyRate.getLevelForBFR(0, '0', '30');
//     healthyRate.getLevelForBFR(0, '1', '29');
//     healthyRate.getLevelForBFR(0, '1', '30');
// })();

// 计算蛋白质 男/女  测试通过
// ;(function () {
//     var i = 1, length = 100;
//     for (; i < length; i += 1) {
//         console.log('女-' + i + '-' + healthyRate.getLevelForProtein(i, '1'));
//     }
// })();

// 计算水份 男/女 测试成功
// ;(function () {
//     var i = 1, length = 100;
//     for (; i < length; i += 0.1) {
//         console.log('女-' + i + '-' + healthyRate.getLevelForTM(i, '1'));
//     }
// })();

// 计算肌肉率 男/女 测试成功
// ;(function () {
//     var i = 1, length = 100;
//     for (; i < length; i += 0.1) {
//         console.log('女-' + i + '-' + healthyRate.getLevelForROM(i, '1'));
//     }
// })();


// 测试 falsy
// ;(function() {
//     var falsy = [null, false, NaN, undefined, '', "", 0],
//         i = 0, length = falsy.length, item;

//     for (; i < length; i++) {
//         item = falsy[i];
//     }
// })();

// 计算内脏脂肪数
// ;(function () {
//     var i = 1, length = 100;
//     for (; i < length; i += 0.1) {
//         console.log(i + ':' + healthyRate.getLevelForNOF(i));
//     }
// })();

// 计算 BMI, 0.1 - 100 测试通过
// ;(function() {
//     var i = 0, length = 100;
//     for (; i < length; i += 0.1) {
//         console.log(i + ':' + healthyRate.getLevelForBMI(i));
//     }
// })();
