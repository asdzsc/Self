/**
 *交换数组中指定位置
 * @param {*} arr
 * @param {*} i1
 * @param {*} i2
 */
function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
/**
 *选择排序
 * @param {*} arr
 */
function selectionSort(arr) {
    //搞定从i ~ arr.length-1 区间
    //从该区间找出最小值进行位置交换
    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i]; //定义一个变量,为该区间的第一个数
        let index = i; //最小值所在位置
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j; //重新记录最小值的位置
            }
        }
        //最小值已经找到,交换第i位与第index位
        swap(arr, i, index);
    }
}

/**
 *冒泡排序
 * @param {*} arr
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        //需要arr.length - 1 次冒泡
        //i = 0 循环arr.length - 1 - ia
        //i = 1 循环arr.length - 1 - i
        //i = 2 循环arr.length - 1 - i

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
}

/**
 *插入排序
 * @param {*} arr
 */
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            //将第i位的值加入到前面有序队列的正确位置
            var temp = arr[i]
            for (let j = i; j >= 0; j--) {
                if (j > 0 && arr[j - 1] > temp) {
                    arr[j] = arr[j - 1]
                } else {
                    arr[j] = temp;
                    break;
                }
            }
        }
    }
}

/**
 * 快速排序
 * @param {*} arr 
 */
function quickSort(arr) {
    /**
     * 对数组中的某个区域进行快速排序
     * @param {*} arr 
     * @param {*} start 区域的开始下标
     * @param {*} end 区域的结束下标
     */
    function _quickSort(arr, start, end) {
        if (start >= end || start > arr.length - 1) return;
        let low = start,
            high = end;
        let key = arr[end]; //基准值
        while (low < high) {
            while (low < high && arr[low] <= key) low++;
            arr[high] = arr[low]
            while (low < high && arr[high] >= key) high--;
            arr[low] = arr[high]
        }
        // low == high
        arr[low] = key
        _quickSort(arr, start, low - 1)
        _quickSort(arr, low + 1, end)
    }
    _quickSort(arr, 0, arr.length - 1)

}

const arr = [5, 3, 1, 6, 7, 4];
console.log(arr);
quickSort(arr);
console.log(arr);