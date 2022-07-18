<script setup lang="ts">
  import { onMounted, Ref, ref, nextTick } from 'vue';
  // import type { EChartsOption } from 'echarts';
  import useEchart from '/@/hooks/useEchart';
  import { RenderType, ThemeType } from '/@/hooks/useEchart/types';
  import Header from '/@/components/Header/index.vue';
  import useConstellation from '/@/hooks/useConstellation';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
  import { Sort, SortBy, Star } from '/@/store/modules/constellation/types';

  document.title = `角色命座 | Genshin.Book`;

  const genshinItem = useGenshinItem();
  const constellation = useConstellation();
  const star = ref<Star>(constellation.star);
  const sort = ref<Sort>(constellation.sort);
  const sortBy = ref<SortBy>(constellation.sortBy);
  const starList = [
    { label: '全部', value: Star.all },
    { label: '五星', value: Star.five },
    { label: '四星', value: Star.four },
  ];
  const sortList = [
    { label: '升序', value: Sort.asc },
    { label: '降序', value: Sort.desc },
  ];
  const sortByList = [
    { label: '角色id', value: SortBy.id },
    { label: '持有率', value: SortBy.持有率 },
    { label: '0命', value: SortBy['0命'] },
    { label: '1命', value: SortBy['1命'] },
    { label: '2命', value: SortBy['2命'] },
    { label: '3命', value: SortBy['3命'] },
    { label: '4命', value: SortBy['4命'] },
    { label: '5命', value: SortBy['5命'] },
    { label: '6命', value: SortBy['6命'] },
  ];
  let avatarMap = genshinItem.avatarMap;
  let isMobile = document.body.clientWidth < 600;

  // 图表数据
  let yData: string[] = [];
  let holdingArr: number[] = [];
  let zeroArr: number[] = [];
  let oneArr: number[] = [];
  let twoArr: number[] = [];
  let threeArr: number[] = [];
  let fourArr: number[] = [];
  let fiveArr: number[] = [];
  let sixArr: number[] = [];

  const formatter = (params) => {
    if (params.data < 0.04) {
      return '';
    }
    const str = `${keepTwoDecimalFull((params.data as number) * 100)}%`;
    return str;
  };
  const yAxisRich = (yData) => {
    let obj: any = {};
    yData.map((item) => {
      // const r = genshinItem.avatars.find((o) => o.name == item);
      obj[`${item}`] = {
        backgroundColor: {
          // image: r!.url,
          image: avatarMap[`${item}`]?.url,
        },
        align: 'center',
        height: 40,
        width: 40,
      };
    });
    return obj;
  };
  // const option = computed<EChartsOption>(() => ());
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
      formatter: (params) => {
        let axisValueLabel = avatarMap[params[0].axisValueLabel].name;
        let str0 = '';
        params.forEach((item, idx) => {
          // str1+=`${}`
          str0 += `${item.marker}${item.seriesName}: ${keepTwoDecimalFull(
            (item.data as number) * 100,
          )}%`;

          str0 += idx === params.length - 1 ? '' : '<br/>';
        });
        return axisValueLabel + '<br>' + str0;
      },
    },
    legend: {
      data: ['持有率', '0命', '1命', '2命', '3命', '4命', '5命', '6命'],
      selectedMode: 'multiple',
      selected: {
        持有率: false,
        '0命': false,
        '1命': false,
        '2命': false,
        '3命': false,
        '4命': false,
        '5命': false,
        '6命': false,
      },
      textStyle: { color: '#6E7079' },
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      splitNumber: 10,
      splitLine: {
        show: false,
      },
      axisLabel: {
        formatter: (params: number) => {
          return `${Math.round(params * 100)}%`;
        },
      },
    },
    yAxis: {
      type: 'category',
      data: [],
      splitLine: {
        show: false,
      },
      axisLabel: {
        formatter: (value) => {
          return '{' + value + '| }';
        },
        rich: {},
      },
    },
    series: [
      {
        name: '持有率',
        type: 'bar',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: holdingArr,
      },
      {
        name: '0命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: zeroArr,
      },
      {
        name: '1命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: oneArr,
      },
      {
        name: '2命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: twoArr,
      },
      {
        name: '3命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: threeArr,
      },
      {
        name: '4命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: fourArr,
      },
      {
        name: '5命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: fiveArr,
      },
      {
        name: '6命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: sixArr,
      },
    ],
  };
  const chartEl = ref<HTMLDivElement | null>(null);
  const { setOption, showLoading } = useEchart(
    chartEl as Ref<HTMLDivElement>,
    true,
    true,
    RenderType.SVGRenderer,
    ThemeType.Light,
  );
  const refreshData = () => {
    let splitNum = 50;
    const _rich = yAxisRich(yData);
    option.yAxis.data = yData as any;
    option.yAxis.axisLabel.rich = _rich;
    // 处理对应项的显示
    option.legend.selected = {
      持有率: false,
      '0命': false,
      '1命': false,
      '2命': false,
      '3命': false,
      '4命': false,
      '5命': false,
      '6命': false,
    };
    switch (sortBy.value) {
      case SortBy.id:
        option.legend.selected = {
          持有率: true,
          '0命': true,
          '1命': true,
          '2命': true,
          '3命': true,
          '4命': true,
          '5命': true,
          '6命': true,
        };
        break;
      case SortBy.持有率:
      default:
        option.legend.selected[`持有率`] = true;
        break;
      case SortBy['0命']:
      case SortBy['1命']:
      case SortBy['2命']:
      case SortBy['3命']:
      case SortBy['4命']:
      case SortBy['5命']:
      case SortBy['6命']:
        option.legend.selected[`${sortBy.value}命`] = true;
        break;
    }

    enum Selected {
      none = -1,
      holdingRate = 0,
      holdingRateAndRate = 1,
      singleRate = 2,
      multipleRate = 3,
    }
    let maxRate = 0;
    let maxHoldingRate = 0;
    let _max = 0; // 最终的最大值
    let arr: string[] = [];
    let s = Selected.none;

    // 遍历数据，找出最大值
    for (const key of Object.keys(option.legend.selected)) {
      if (option.legend.selected[key]) {
        arr.push(key);
      }
    }
    if (arr.includes('持有率') && arr.length > 1) {
      s = Selected.holdingRateAndRate;
    } else if (!arr.includes('持有率') && arr.length > 1) {
      s = Selected.multipleRate;
    } else if (!arr.includes('持有率') && arr.length == 1) {
      s = Selected.singleRate;
    } else if (arr.includes('持有率') && arr.length == 1) {
      s = Selected.holdingRate;
    }
    constellation.data.map((item) => {
      switch (s) {
        case Selected.holdingRateAndRate: // 既有持有率又有命座
          let tempSum: number = 0;
          maxHoldingRate =
            item.holdingRate - maxHoldingRate >= 0 ? item.holdingRate : maxHoldingRate;
          arr
            .filter((el) => el !== '持有率')
            .map((c) => {
              tempSum += item.rate[c.substring(0, 1)].value;
            });
          maxRate = tempSum - maxRate >= 0 ? tempSum : maxRate;
          break;
        case Selected.holdingRate: // 只有持有率
          maxHoldingRate =
            item.holdingRate - maxHoldingRate >= 0 ? item.holdingRate : maxHoldingRate;
          break;
        case Selected.singleRate: // 只有单个命座
          console.log(item.rate[parseInt(arr[0].substring(0, 1))].id);
          maxRate =
            item.rate[parseInt(arr[0].substring(0, 1))].value - maxRate >= 0
              ? item.rate[parseInt(arr[0].substring(0, 1))].value
              : maxRate;
          break;
        case Selected.multipleRate: // 多个命座
          let tempSum2: number = 0;
          arr.map((c) => {
            tempSum2 += item.rate[c.substring(0, 1)].value;
          });
          maxRate = tempSum2 - maxRate >= 0 ? tempSum2 : maxRate;
          break;
      }
    });
    _max = maxHoldingRate - maxRate >= 0 ? maxHoldingRate : maxRate;
    // console.log(arr, s);

    // 根据最大值划分x轴份数
    splitNum =
      Math.ceil(Math.ceil(_max * 100) / 2) > 25
        ? Math.ceil(Math.ceil(_max * 100) / 2)
        : Math.ceil(_max * 100);
    option.xAxis.splitNumber = isMobile ? 10 : splitNum;

    setOption(option as any);
  };

  const starChange = (val) => {
    yData = [];
    constellation.filterStar(val);
  };
  const sortChange = (val) => {
    yData = [];

    constellation.toggleSort(val);
  };
  const sortByChange = (val) => {
    yData = [];
    constellation.sortData(val, undefined);
  };

  watchEffect(() => {
    const data = constellation.data;
    avatarMap = genshinItem.avatarMap;
    data.map((item) => {
      // 处理图表y轴内容
      yData.unshift(`${item.avatar}`);
      // yData.value.unshift(genshinItem.avatarMap[item.avatar].name);
      holdingArr.unshift(item.holdingRate);
      item.rate.map((el) => {
        switch (el.id) {
          case 0:
            zeroArr.unshift(el.value);
            // zeroArr.value.unshift(parseFloat(el.value));
            break;
          case 1:
            oneArr.unshift(el.value);
            // oneArr.value.unshift(parseFloat(el.value));
            break;
          case 2:
            // twoArr.value.unshift(parseFloat(el.value));
            twoArr.unshift(el.value);
            break;
          case 3:
            threeArr.unshift(el.value);
            // threeArr.value.unshift(parseFloat(el.value));
            break;
          case 4:
            fourArr.unshift(el.value);
            // fourArr.value.unshift(parseFloat(el.value));
            break;
          case 5:
            fiveArr.unshift(el.value);
            // fiveArr.value.unshift(parseFloat(el.value));
            break;
          case 6:
            sixArr.unshift(el.value);
            // sixArr.value.unshift(parseFloat(el.value));
            break;
          default:
            break;
        }
      });
    });
    refreshData();
  });

  onMounted(() => {
    nextTick(() => {
      showLoading();
      if (constellation.data.length > 0) {
        refreshData();
      }
    });
  });
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <!-- 角色命座 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-gray-400">角色命座数据</span>
        </h1>
        <h5 class="text-sm">持有率以及各命座占比</h5>
      </div>
    </main>
    <div class="flex flex-wrap justify-center item-center my-8 md:mt-0 lg:mt-0">
      <div class="flex justify-center items-center py-2">
        <span>显示</span>
        <span class="w-20 px-2 flex items-center">
          <el-select
            size="small"
            @change="starChange"
            v-model="star"
            filterable
            placeholder="Select"
          >
            <el-option
              v-for="(item, index) in starList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </span>
        <span>角色，</span>
      </div>
      <div class="flex justify-center items-center py-2">
        <span>按</span>
        <span class="w-24 px-2 flex items-center">
          <el-select
            size="small"
            v-model="sortBy"
            filterable
            placeholder="Select"
            @change="sortByChange"
          >
            <el-option
              v-for="(item, index) in sortByList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </span>
        <span>进行</span>
      </div>
      <div class="flex justify-center items-center py-2">
        <span class="w-20 px-2 flex items-center">
          <el-select
            size="small"
            @change="sortChange"
            v-model="sort"
            filterable
            placeholder="Select"
          >
            <el-option
              v-for="(item, index) in sortList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </span>
        <span>排列</span>
      </div>
    </div>
    <div class="text-xs text-center"> 点击查看更多命座数据 👇</div>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-0 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6">
        <el-card class="mb-3 mx-2 md:mx-4 lg:mx-4 w-full h-chartHeight">
          <div ref="chartEl" class="chart h-chartHeight"></div>
          <!-- <li class="px-3 pt-4 md:px-10 sm:pt-5 md:pb-8">
           
          </li> -->
        </el-card>
      </ul>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped>
  .chart {
    width: calc(100vw - 20rem -2rem);
    // height: 2000px;
  }
</style>
