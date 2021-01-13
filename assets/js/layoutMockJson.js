const layoutMockJson = [
  {
    title: 'McMASTER-CARR',
    key: '1',
    type: 'appstore',
    url: 'mcmastercarr',
    logo: require('@/assets/img/tab1-logo.png'),
    detail:
      'McMaster-Carr是来自美国的一家五金工具以及配件出产商，主要出产以及销售各类五金产品，销售各种mcmaster中国代理五金紧固件，涵盖的领域十分广泛。我司（深圳市北富联机电有限公司）主要销售不同材质高强度标准紧固件等，如圆柱销、螺丝、螺母、垫片等',
    productList: [
      {
        img: require('@/assets/img/second/luosi-1.png'),
        name: '内六角螺丝详情',
        alt: '北富联的六角螺丝',
        hasDetai: true, // 是否有详情
        expand: {
          title: '内六角螺丝系列',
          subList: [
            {
              img: require('@/assets/img/second/neiliu1.png'),
              name: '合金钢内六角螺钉',
              alt: 'mcmaster合金钢内六角螺钉-northfull.com',
              desc:
                '合金刚内六角螺钉满足高强度禁锢的标准，适用于各类高端产品的固定。',
            },
            {
              img: require('@/assets/img/second/neiliu2.png'),
              name: '米尔规格合金刚内六角螺钉',
              alt: 'mcmaster米尔规格合金刚内六角螺钉-northfull.com',
              desc:
                '多用于军事材料中，符合材料和机构的严谨，各企业可根据自身选择。',
            },
            {
              img: require('@/assets/img/second/neiliu3.png'),
              name: '梅花合金钢内六角螺钉',
              alt: 'mcmaster梅花合金钢内六角螺钉-northfull.com',
              desc:
                '梅花合金钢内六角螺钉与六角驱动器相比，Torx-plus的驱动器具有更多的接触点，可以帮助机器减少损坏或者打滑，可以更加拧紧螺钉等。',
            },
            {
              img: require('@/assets/img/second/neiliu4.png'),
              name: '左螺纹合金钢内六角头螺钉',
              alt: 'mcmaster左螺纹合金钢内六角头螺钉-northfull.com',
              desc:
                '主打向左拧紧这些螺钉，符合人类惯用右手的习惯。一旦进行紧固，可加固零件松动，防止零件的松动。',
            },
            {
              img: require('@/assets/img/second/neiliu5.png'),
              name: '高温合金钢内六角螺钉-B7级',
              alt: 'mcmaster高温合金钢内六角螺钉-B7级-northfull.com',
              desc: '非常耐高温，最高1100℉',
            },
            {
              img: require('@/assets/img/second/neiliu6.png'),
              name: '18-8不锈钢内六角螺钉',
              alt: 'mcmaster18-8不锈钢内六角螺钉-northfull.com',
              desc:
                '采用不锈钢材质，具有很好的耐化学性，多用于军事、高科技产品中的机器固定中。',
            },
            {
              img: require('@/assets/img/second/neiliu7.png'),
              name: '左螺纹',
              alt: 'mcmaster左螺纹-northfull.com',
              desc:
                '向左拧紧不锈钢内六角头螺钉，一旦固定，可防止逆时针的零件松动，具有良好的耐化学性',
            },
            {
              img: require('@/assets/img/second/neiliu8.png'),
              name: '塑料内六角螺丝',
              alt: 'mcmaster塑料内六角螺丝-northfull.com',
              desc: '采用塑料材质，但是具有耐化学和耐油，重量轻而且不导电。',
            },
            {
              img: require('@/assets/img/second/neiliu9.png'),
              name: '铝制内六角螺钉',
              alt: 'mcmaster铝制内六角螺钉-northfull.com',
              desc:
                '采用“铝”材质制作而成，铝内六角螺钉是钢的三分之一，它有很好的耐腐蚀性。',
            },
            {
              img: require('@/assets/img/second/neiliu10.png'),
              name: '钛制内六角螺钉',
              alt: 'mcmaster钛制内六角螺钉-northfull.com',
              desc:
                '钛内六角螺丝是最耐腐蚀的金属螺丝，钛螺钉可以承受酸、盐水和化学物质，重量比钢螺丝轻大约40%',
            },
            {
              img: require('@/assets/img/second/neiliu11.png'),
              name: '镍合金内六角螺钉',
              alt: 'mcmaster塑料内六角螺丝-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/neiliu12.png'),
              name: '青铜内六角螺钉',
              alt: 'mcmaster塑料内六角螺丝-northfull.com',
              desc:
                '采用青铜材质制作的内六角螺钉比黄铜螺钉坚固约40%。具有非磁性和导电，青铜内六角螺钉对盐水、气体和污水有很好的奶腐蚀性',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/luosi-2.png'),
        name: '圆头螺丝',
        alt: '北富联圆头螺丝',
        hasDetai: true, // 是否有详情
        expand: {
          title: '圆头螺丝系列',
          subList: [
            {
              img: require('@/assets/img/second/yuantou1.png'),
              name: '六角驱动圆头螺丝',
              alt: 'mcmaster六角驱动圆头螺丝-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/yuantou2.png'),
              name: '十字螺丝',
              alt: 'mcmaster十字螺丝-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/yuantou3.png'),
              name: '开槽圆头螺丝',
              alt: 'mcmaster开槽圆头螺丝-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/yuantou4.png'),
              name: '梅花圆头螺丝',
              alt: 'mcmaster梅花圆头螺丝-northfull.com',
              desc:
                '梅花圆头螺丝使用torx驱动器比其他的螺丝可以接触到更多的驱动器，使得您拧紧螺丝不会损坏凹槽。',
            },
            {
              img: require('@/assets/img/second/yuantou5.png'),
              name: '十字圆头螺丝',
              alt: 'mcmaster十字圆头螺丝-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/yuantou6.png'),
              name: '密封圆头螺丝',
              alt: 'mcmaster密封圆头螺丝-northfull.com',
              desc: '采用密封圆头，可防止泄露并密封污染物',
            },
            {
              img: require('@/assets/img/second/yuantou7.png'),
              name: '排气圆头螺丝',
              alt: 'mcmaster排气圆头螺丝-northfull.com',
              desc: '排气圆头螺丝可以很好的排出螺钉下面节流的气体和流体。',
            },
            {
              img: require('@/assets/img/second/yuantou8.png'),
              name: '左旋圆头螺丝',
              alt: 'mcmaster左旋圆头螺丝-northfull.com',
              desc: '左旋圆头螺钉一旦紧固，可防止因逆时针的运动而松动。',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/luosi-3.png'),
        name: '六角头螺钉',
        alt: '北富联的六角头螺钉',
        hasDetai: true, // 是否有详情
        expand: {
          title: '六角头螺钉系列',
          subList: [
            {
              img: require('@/assets/img/second/liujiaotou1.png'),
              name: '高强度六角头螺钉',
              alt: 'mcmaster六角驱动圆头螺丝-northfull.com',
              desc:
                '由8级钢制成，可用于高应力应用，例如阀门， 泵， 马达和汽车悬架系统。它们比中强度钢螺钉至少坚固25％。8级钢制六角头螺钉标记有六个径向线.符合ASTM A354BD或SAEJ429的螺钉符合材料质量的规格和测试要求,有全螺纹六角头螺丝和半螺纹六角头螺丝或部分六角头螺丝',
            },
            {
              img: require('@/assets/img/second/liujiaotou2.png'),
              name: '钢六角头螺钉',
              alt: 'mcmaster钢六角头螺钉-northfull.com',
              desc:
                '钢螺钉以用于高应力应用，例如阀门， 泵， 马达和汽车悬架系统。它们比中强度钢螺钉至少坚固25％。尺寸符合ISO （以前的 DIN） 规格,具有全螺纹钢六角头螺钉和部分螺纹钢六角头螺钉。',
            },
            {
              img: require('@/assets/img/second/liujiaotou3.png'),
              name: '中强度钢六角头螺钉',
              alt: 'mcmaster中强度钢六角头螺钉-northfull.com',
              desc:
                '按照陆军/海军规格制造，强度与五级钢螺钉相当。具有精确测量的无螺纹部分（手柄），适合固定大多数机械和设备。镉镀层对盐水具有良好的耐腐蚀性。',
            },
            {
              img: require('@/assets/img/second/liujiaotou4.png'),
              name: '公制12.9超级强度钢六角头螺钉',
              alt: 'mcmaster公制12.9超级强度钢六角头螺钉-northfull.com',
              desc:
                '用于重型冲压应用的12类9钢螺钉以及推土机和挖掘机等土方机械。用的抗张强度170， 000磅，它们是10％比我们的其它度量钢强螺钉。尺寸符合ISO 4017 （以前为DIN 933） 规范,潮湿的环境中具有抗腐蚀能力',
            },
            {
              img: require('@/assets/img/second/liujiaotou5.png'),
              name: '铝六角头螺钉',
              alt: 'mcmaster铝六角头螺钉-northfull.com',
              desc: '重量是钢的三分之一，有很好的耐腐蚀性',
            },
            {
              img: require('@/assets/img/second/liujiaotou6.png'),
              name: '镍合金六角头螺钉',
              alt: 'mcmaster镍合金六角头螺钉-northfull.com',
              desc:
                '比316不锈钢有更强的腐蚀性，对某些算和盐水具有很强的耐受性。',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/luosi-4.png'),
        name: '平头螺丝',
        alt: '北富联的平头螺丝',
        hasDetai: true, // 是否有详情
        expand: {
          title: '平头螺丝系列',
          subList: [
            {
              img: require('@/assets/img/second/pingtou1.png'),
              name: '六角驱动平头螺丝',
              alt: 'mcmaster六角驱动平头螺丝-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/pingtou2.png'),
              name: '十字螺丝',
              alt: 'mcmaster十字螺丝-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/pingtou3.png'),
              name: '梅花平头螺钉',
              alt: 'mcmaster梅花平头螺钉-northfull.com',
              desc: '梅花平头螺丝相比其他螺丝拧的更紧，不会损害凹槽。',
            },
            {
              img: require('@/assets/img/second/pingtou4.png'),
              name: '防震平头螺丝',
              alt: 'mcmaster防震平头螺丝-northfull.com',
              desc: '防震平头螺丝粘结在螺纹上的尼龙可以增加摩擦，防止松动。',
            },
            {
              img: require('@/assets/img/second/pingtou5.png'),
              name: '密封平头螺钉',
              alt: 'mcmaster密封平头螺钉-northfull.com',
              desc:
                '密封平头螺钉的橡胶O形圈可防止泄露，并且可以很好的密封污染物，适合多种机器使用。',
            },
            {
              img: require('@/assets/img/second/pingtou6.png'),
              name: '排气平头螺钉',
              alt: 'mcmaster排气平头螺钉-northfull.com',
              desc: '排气平头螺钉可排出螺钉下面截留的气体和流体。',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/luosi-5.png'),
        name: '自攻螺钉（木螺钉和干式墙螺钉）',
        alt: '北富联的自攻螺钉（木螺钉和干式墙螺钉',
        hasDetai: true, // 是否有详情
        expand: {
          title: '自攻螺钉（木螺钉和干式墙螺钉）系列',
          subList: [],
        },
      },
      {
        img: require('@/assets/img/second/xiao.jpg'),
        name: '销',
        alt: '北富联的销',
        hasDetai: true, // 是否有详情
        expand: {
          title: '销系列',
          subList: [
            {
              img: require('@/assets/img/second/xiao.jpg'),
              name: '销',
              alt: 'mcmaster销-northfull.com',
              desc:
                '高精密“销”适用于各大机器设备中，具有很高的抗腐蚀性和抗氧化的性能。',
            },
          ],
        },
        detailList: [
          {
            title: '销的介绍',
            list: [
              '导向销，使用这些销定位， 枢转和对齐组件。要在钣金上安装，打孔或钻一个孔，然后使用冲头和砧座或刀杆压机将头部压紧到金属上。',
              '引脚经过钝化处理，以增强抗腐蚀和抗氧化性能。端部经过倒角处理，易于插入。',
              'PEM® TPS销上钢或铝的工作表。它们由18-8不锈钢制成，具有强度和耐腐蚀性之间的平衡，并且可能具有中等磁性。',
              'PEM® TP4销上不锈钢工作表。它们由400系列不锈钢制成，具有抗磨损和耐磨性，但不像18-8不锈钢销那样耐腐蚀。引脚可能具有轻微的磁性。',
              'PEM® MPP引脚与大多数工作材料。它们是由A286不锈钢制成的， 是我们最坚固的固定销，其耐腐蚀性可与18-8不锈钢销媲美。它们是非磁性的',
            ],
          },
        ],
      },
      {
        img: require('@/assets/img/second/berg1.jpg'),
        name: '螺钉',
        alt: '北富联的螺钉',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺钉系列',
          subList: [
            {
              img: require('@/assets/img/second/berg1.jpg'),
              name: '螺钉',
              alt: 'BERG螺钉-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg2.jpg'),
        name: '螺母',
        alt: '北富联的螺母',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺母系列',
          subList: [
            {
              img: require('@/assets/img/second/berg2.jpg'),
              name: '螺母',
              alt: 'BERG螺母-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg3.jpg'),
        name: '弹簧垫',
        alt: '北富联的弹簧垫',
        hasDetai: true, // 是否有详情
        expand: {
          title: '弹簧垫系列',
          subList: [
            {
              img: require('@/assets/img/second/berg3.jpg'),
              name: '弹簧垫',
              alt: 'BERG弹簧垫-northfull.com',
              desc:
                'M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg4.jpg'),
        name: '挡圈 ',
        alt: '北富联的挡圈 ',
        hasDetai: true, // 是否有详情
        expand: {
          title: '挡圈 系列',
          subList: [
            {
              img: require('@/assets/img/second/berg4.jpg'),
              name: '挡圈 ',
              alt: 'BERG挡圈-northfull.com',
              desc:
                '公制：M2.5 ~ M1000;美制: 0.125"~ 10";材质：合金钢   65Mn, AISI 410, AISI 420,不锈钢   AISI 302, AISI 316, PH 15-7, PH17-7',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg5.jpg'),
        name: '拉铆螺母',
        alt: '北富联的拉铆螺母',
        hasDetai: true, // 是否有详情
        expand: {
          title: '拉铆螺母系列',
          subList: [
            {
              img: require('@/assets/img/second/berg5.jpg'),
              name: '拉铆螺母',
              alt: 'BERG拉铆螺母-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg6.jpg'),
        name: '铆钉',
        alt: '北富联的铆钉',
        hasDetai: true, // 是否有详情
        expand: {
          title: '铆钉系列',
          subList: [
            {
              img: require('@/assets/img/second/berg6.jpg'),
              name: '铆钉',
              alt: 'BERG铆钉-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg6-0.jpg'),
              name: '实心铆钉',
              alt: 'BERG实心铆钉-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg7.jpg'),
        name: '螺套',
        alt: '北富联的螺套',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺套系列',
          subList: [
            {
              img: require('@/assets/img/second/berg7.jpg'),
              name: '螺套',
              alt: 'BERG螺套-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg7-0.jpg'),
              name: '自攻螺套',
              alt: 'BERG自攻螺套-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/berg7-1.jpg'),
              name: '插销螺套',
              alt: 'BERG插销螺套-northfull.com',
              desc: '无',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg8.jpg'),
        name: '定位销',
        alt: '北富联的定位销',
        hasDetai: true, // 是否有详情
        expand: {
          title: '定位销系列',
          subList: [
            {
              img: require('@/assets/img/second/berg8.jpg'),
              name: '定位销',
              alt: 'BERG定位销-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg8-0.jpg'),
              name: '弹簧销',
              alt: 'BERG弹簧销-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg9.jpg'),
              name: '圆柱销',
              alt: 'BERG圆柱销-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg9.jpg'),
        name: '其他',
        alt: '北富联的其他',
        hasDetai: true, // 是否有详情
        expand: {
          title: '其他系列',
          subList: [
            {
              img: require('@/assets/img/second/berg9.jpg'),
              name: '其他',
              alt: 'BERG其他-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
    ],
  },
  {
    title: 'Helicoil',
    key: '2',
    type: 'appstore',
    url: 'helicoil',
    logo: require('@/assets/img/tab3-logo.png'),
    detail:
      'Helicoil螺套是原产于美国的螺套品牌，主要用于螺纹加强及修复，能够为您的需求提供高强度的耐热耐磨的高精度螺纹.',
    productList: [
      {
        img: require('@/assets/img/second/helicoil.jpg'),
        name: '螺套',
        alt: 'helicoil螺套-northfull.com',
        hasDetai: true, // 是否有详情
        expand: {
          title: 'Helicoil 螺套系列',
          subList: [],
        },
        detailList: [
          {
            title: '规格：',
            list: [
              'Helicoil螺纹护套螺纹规格： helicoil 螺套按螺纹规格可分为公制（粗牙和细牙）、统一粗牙螺套（UNC）和统一细牙螺套（UNF），另外还有英国标准（粗牙BSW和细牙BSF）和管螺纹（G）规格的螺纹护套',
              'Helicoil 螺纹护套长度规格：通常螺套的长度按安装在其内的螺栓的公称直径d的倍数选择，每种螺套有1d，1.5d，2d，2.5d，3d长度。例如：M6，长1.5d的螺套，安装后可形成M6，长度为9mm的内螺纹孔',
            ],
          },
          {
            title: '分类：',
            list: [
              'Helicoil螺套按其自身结构可分为：普通型（Free Running）和锁紧型（Screw Lock），锁紧型螺套是在螺套的中间通过一圈或多圈多边形线圈来实现对安装在其中的螺栓产生夹持作用，起到防松的效果。附加的防松垫片等就没有必要了，这样可以降低成本并确保简化装配',
            ],
          },
          {
            title: '标准：',
            list: [
              '化学成分和物理性能符合AS7245，ASME SA-497，AS7246标准。',
              '符合军事标准MS21208，NASM21209，NASM122076至NASM12275，NASM124651至NASM124850，MS9018和 军事规格NASM8846。',
              '符合航空标准MA3279，MA3280，MA3281，MA3329，MA3330，MA3331，MA1565',
              '符合ISO9001-ISO/TS 16949标准。',
            ],
          },
        ],
      },
      {
        img: require('@/assets/img/second/helicoil1.jpg'),
        name: '钢丝螺套',
        alt: 'helicoil钢丝螺套-northfull',
        hasDetai: true, // 是否有详情
        expand: {
          title: '钢丝螺套系列',
          subList: [],
        },
        detailList: [
          {
            title: '规格：',
            list: [
              'Helicoil螺纹护套螺纹规格： helicoil 螺套按螺纹规格可分为公制（粗牙和细牙）、统一粗牙螺套（UNC）和统一细牙螺套（UNF），另外还有英国标准（粗牙BSW和细牙BSF）和管螺纹（G）规格的螺纹护套',
              'Helicoil 螺纹护套长度规格：通常螺套的长度按安装在其内的螺栓的公称直径d的倍数选择，每种螺套有1d，1.5d，2d，2.5d，3d长度。例如：M6，长1.5d的螺套，安装后可形成M6，长度为9mm的内螺纹孔',
            ],
          },
          {
            title: '分类：',
            list: [
              'Helicoil螺套按其自身结构可分为：普通型（Free Running）和锁紧型（Screw Lock），锁紧型螺套是在螺套的中间通过一圈或多圈多边形线圈来实现对安装在其中的螺栓产生夹持作用，起到防松的效果。附加的防松垫片等就没有必要了，这样可以降低成本并确保简化装配',
            ],
          },
          {
            title: '标准：',
            list: [
              '化学成分和物理性能符合AS7245，ASME SA-497，AS7246标准。',
              '符合军事标准MS21208，NASM21209，NASM122076至NASM12275，NASM124651至NASM124850，MS9018和 军事规格NASM8846。',
              '符合航空标准MA3279，MA3280，MA3281，MA3329，MA3330，MA3331，MA1565',
              '符合ISO9001-ISO/TS 16949标准。',
            ],
          },
        ],
      },
      {
        img: require('@/assets/img/second/helicoil2.jpg'),
        name: '北富联机电的helicoil螺套',
        alt: '北富联机电的helicoil螺套',
        hasDetai: true, // 是否有详情
        expand: {
          title: '北富联机电的helicoil螺套系列',
          subList: [],
        },
        detailList: [
          {
            title: '规格：',
            list: [
              'Helicoil螺纹护套螺纹规格： helicoil 螺套按螺纹规格可分为公制（粗牙和细牙）、统一粗牙螺套（UNC）和统一细牙螺套（UNF），另外还有英国标准（粗牙BSW和细牙BSF）和管螺纹（G）规格的螺纹护套',
              'Helicoil 螺纹护套长度规格：通常螺套的长度按安装在其内的螺栓的公称直径d的倍数选择，每种螺套有1d，1.5d，2d，2.5d，3d长度。例如：M6，长1.5d的螺套，安装后可形成M6，长度为9mm的内螺纹孔',
            ],
          },
          {
            title: '分类：',
            list: [
              'Helicoil螺套按其自身结构可分为：普通型（Free Running）和锁紧型（Screw Lock），锁紧型螺套是在螺套的中间通过一圈或多圈多边形线圈来实现对安装在其中的螺栓产生夹持作用，起到防松的效果。附加的防松垫片等就没有必要了，这样可以降低成本并确保简化装配',
            ],
          },
          {
            title: '标准：',
            list: [
              '化学成分和物理性能符合AS7245，ASME SA-497，AS7246标准。',
              '符合军事标准MS21208，NASM21209，NASM122076至NASM12275，NASM124651至NASM124850，MS9018和 军事规格NASM8846。',
              '符合航空标准MA3279，MA3280，MA3281，MA3329，MA3330，MA3331，MA1565',
              '符合ISO9001-ISO/TS 16949标准。',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'BERG',
    key: '3',
    type: 'appstore',
    url: 'berg',
    logo: require('@/assets/img/tab2-logo.png'),
    detail:
      'Berg是全球微型精密机械零件的领先制造商。我们公司主要销售Berg任何材质的圆柱销。圆柱销属于定位销，用于固定零件之间的相对位置。它是组合加工和装配时候的重要辅助零件',
    productList: [
      {
        img: require('@/assets/img/second/berg1.jpg'),
        name: '螺钉',
        alt: '北富联的螺钉',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺钉系列',
          subList: [
            {
              img: require('@/assets/img/second/berg1.jpg'),
              name: '螺钉',
              alt: 'BERG螺钉-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg2.jpg'),
        name: '螺母',
        alt: '北富联的螺母',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺母系列',
          subList: [
            {
              img: require('@/assets/img/second/berg2.jpg'),
              name: '螺母',
              alt: 'BERG螺母-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg3.jpg'),
        name: '弹簧垫',
        alt: '北富联的弹簧垫',
        hasDetai: true, // 是否有详情
        expand: {
          title: '弹簧垫系列',
          subList: [
            {
              img: require('@/assets/img/second/berg3.jpg'),
              name: '弹簧垫',
              alt: 'BERG弹簧垫-northfull.com',
              desc:
                'M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg4.jpg'),
        name: '挡圈 ',
        alt: '北富联的挡圈 ',
        hasDetai: true, // 是否有详情
        expand: {
          title: '挡圈 系列',
          subList: [
            {
              img: require('@/assets/img/second/berg4.jpg'),
              name: '挡圈 ',
              alt: 'BERG挡圈-northfull.com',
              desc:
                '公制：M2.5 ~ M1000;美制: 0.125"~ 10";材质：合金钢   65Mn, AISI 410, AISI 420,不锈钢   AISI 302, AISI 316, PH 15-7, PH17-7',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg5.jpg'),
        name: '拉铆螺母',
        alt: '北富联的拉铆螺母',
        hasDetai: true, // 是否有详情
        expand: {
          title: '拉铆螺母系列',
          subList: [
            {
              img: require('@/assets/img/second/berg5.jpg'),
              name: '拉铆螺母',
              alt: 'BERG拉铆螺母-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg6.jpg'),
        name: '铆钉',
        alt: '北富联的铆钉',
        hasDetai: true, // 是否有详情
        expand: {
          title: '铆钉系列',
          subList: [
            {
              img: require('@/assets/img/second/berg6.jpg'),
              name: '铆钉',
              alt: 'BERG铆钉-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg6-0.jpg'),
              name: '实心铆钉',
              alt: 'BERG实心铆钉-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg7.jpg'),
        name: '螺套',
        alt: '北富联的螺套',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺套系列',
          subList: [
            {
              img: require('@/assets/img/second/berg7.jpg'),
              name: '螺套',
              alt: 'BERG螺套-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg7-0.jpg'),
              name: '自攻螺套',
              alt: 'BERG自攻螺套-northfull.com',
              desc: '无',
            },
            {
              img: require('@/assets/img/second/berg7-1.jpg'),
              name: '插销螺套',
              alt: 'BERG插销螺套-northfull.com',
              desc: '无',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg8.jpg'),
        name: '定位销',
        alt: '北富联的定位销',
        hasDetai: true, // 是否有详情
        expand: {
          title: '定位销系列',
          subList: [
            {
              img: require('@/assets/img/second/berg8.jpg'),
              name: '定位销',
              alt: 'BERG定位销-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg8-0.jpg'),
              name: '弹簧销',
              alt: 'BERG弹簧销-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
            {
              img: require('@/assets/img/second/berg9.jpg'),
              name: '圆柱销',
              alt: 'BERG圆柱销-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg9.jpg'),
        name: '其他',
        alt: '北富联的其他',
        hasDetai: true, // 是否有详情
        expand: {
          title: '其他系列',
          subList: [
            {
              img: require('@/assets/img/second/berg9.jpg'),
              name: '其他',
              alt: 'BERG其他-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      // {
      //   img: require('@/assets/img/luoding.jpg'),
      //   name: '螺钉',
      // },
      // {
      //   img: require('@/assets/img/luoding2.jpg'),
      //   name: '紧定螺钉',
      // },
      // {
      //   img: require('@/assets/img/luoding3.jpg'),
      //   name: '内六角螺钉',
      // },
      // {
      //   img: require('@/assets/img/luoding4.jpg'),
      //   name: '轴肩螺钉',
      // },
      // {
      //   img: require('@/assets/img/luomu.jpg'),
      //   name: '螺母',
      // },
      // {
      //   img: require('@/assets/img/dianquan.jpg'),
      //   name: '齿形垫',
      // },
      // {
      //   img: require('@/assets/img/dianquan2.jpg'),
      //   name: '弹簧垫',
      // },
      // {
      //   img: require('@/assets/img/dianquan3.jpg'),
      //   name: '平垫',
      // },
      // {
      //   img: require('@/assets/img/dangquan.jpg'),
      //   name: '挡圈',
      // },
      // {
      //   img: require('@/assets/img/laliu.jpg'),
      //   name: '拉铆螺母',
      // },
      // {
      //   img: require('@/assets/img/laliu2.jpg'),
      //   name: '拉铆螺柱',
      // },
      // {
      //   img: require('@/assets/img/liuding.jpg'),
      //   name: '抽芯铆钉',
      // },
      // {
      //   img: require('@/assets/img/liuding2.jpg'),
      //   name: '实心铆钉',
      // },
      // {
      //   img: require('@/assets/img/luotao.jpg'),
      //   name: '插销螺套',
      // },
      // {
      //   img: require('@/assets/img/luotao2.jpg'),
      //   name: '螺套',
      // },
      // {
      //   img: require('@/assets/img/luotao3.jpg'),
      //   name: '自攻螺套',
      // },
      // {
      //   img: require('@/assets/img/dingweixiao.jpg'),
      //   name: '弹簧销',
      // },
      // {
      //   img: require('@/assets/img/dingweixiao2.jpg'),
      //   name: '圆柱销',
      // },
      // {
      //   img: require('@/assets/img/qita.jpg'),
      //   name: '吊环',
      // },
      // {
      //   img: require('@/assets/img/qita2.jpg'),
      //   name: '内六角扳手',
      // },
    ],
  },
  // {
  //   title: 'recoli',
  //   key: '4',
  //   type: 'appstore',
  //   logo: require('@/assets/img/tab2-logo.png'),
  //   detail:
  //     '',
  //   productList: [
  //     {
  //       img: require('@/assets/img/second/recoil1.png'),
  //       name: '螺套',
  //       alt: '北富联的螺钉',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '螺钉系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg1.jpg'),
  //             name: '螺钉',
  //             alt: 'BERG螺钉-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg2.jpg'),
  //       name: '螺母',
  //       alt: '北富联的螺母',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '螺母系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg2.jpg'),
  //             name: '螺母',
  //             alt: 'BERG螺母-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg3.jpg'),
  //       name: '弹簧垫',
  //       alt: '北富联的弹簧垫',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '弹簧垫系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg3.jpg'),
  //             name: '弹簧垫',
  //             alt: 'BERG弹簧垫-northfull.com',
  //             desc:
  //               'M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg4.jpg'),
  //       name: '挡圈 ',
  //       alt: '北富联的挡圈 ',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '挡圈 系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg4.jpg'),
  //             name: '挡圈 ',
  //             alt: 'BERG挡圈-northfull.com',
  //             desc:
  //               '公制：M2.5 ~ M1000;美制: 0.125"~ 10";材质：合金钢   65Mn, AISI 410, AISI 420,不锈钢   AISI 302, AISI 316, PH 15-7, PH17-7',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg5.jpg'),
  //       name: '拉铆螺母',
  //       alt: '北富联的拉铆螺母',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '拉铆螺母系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg5.jpg'),
  //             name: '拉铆螺母',
  //             alt: 'BERG拉铆螺母-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg6.jpg'),
  //       name: '铆钉',
  //       alt: '北富联的铆钉',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '铆钉系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg6.jpg'),
  //             name: '铆钉',
  //             alt: 'BERG铆钉-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //           {
  //             img: require('@/assets/img/second/berg6-0.jpg'),
  //             name: '实心铆钉',
  //             alt: 'BERG实心铆钉-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg7.jpg'),
  //       name: '螺套',
  //       alt: '北富联的螺套',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '螺套系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg7.jpg'),
  //             name: '螺套',
  //             alt: 'BERG螺套-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //           {
  //             img: require('@/assets/img/second/berg7-0.jpg'),
  //             name: '自攻螺套',
  //             alt: 'BERG自攻螺套-northfull.com',
  //             desc: '无',
  //           },
  //           {
  //             img: require('@/assets/img/second/berg7-1.jpg'),
  //             name: '插销螺套',
  //             alt: 'BERG插销螺套-northfull.com',
  //             desc: '无',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg8.jpg'),
  //       name: '定位销',
  //       alt: '北富联的定位销',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '定位销系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg8.jpg'),
  //             name: '定位销',
  //             alt: 'BERG定位销-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //           {
  //             img: require('@/assets/img/second/berg8-0.jpg'),
  //             name: '弹簧销',
  //             alt: 'BERG弹簧销-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //           {
  //             img: require('@/assets/img/second/berg9.jpg'),
  //             name: '圆柱销',
  //             alt: 'BERG圆柱销-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       img: require('@/assets/img/second/berg9.jpg'),
  //       name: '其他',
  //       alt: '北富联的其他',
  //       hasDetai: true, // 是否有详情
  //       expand: {
  //         title: '其他系列',
  //         subList: [
  //           {
  //             img: require('@/assets/img/second/berg9.jpg'),
  //             name: '其他',
  //             alt: 'BERG其他-northfull.com',
  //             desc:
  //               '生产范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
  //           },
  //         ],
  //       },
  //     },
  //     // {
  //     //   img: require('@/assets/img/luoding.jpg'),
  //     //   name: '螺钉',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/luoding2.jpg'),
  //     //   name: '紧定螺钉',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/luoding3.jpg'),
  //     //   name: '内六角螺钉',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/luoding4.jpg'),
  //     //   name: '轴肩螺钉',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/luomu.jpg'),
  //     //   name: '螺母',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/dianquan.jpg'),
  //     //   name: '齿形垫',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/dianquan2.jpg'),
  //     //   name: '弹簧垫',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/dianquan3.jpg'),
  //     //   name: '平垫',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/dangquan.jpg'),
  //     //   name: '挡圈',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/laliu.jpg'),
  //     //   name: '拉铆螺母',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/laliu2.jpg'),
  //     //   name: '拉铆螺柱',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/liuding.jpg'),
  //     //   name: '抽芯铆钉',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/liuding2.jpg'),
  //     //   name: '实心铆钉',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/luotao.jpg'),
  //     //   name: '插销螺套',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/luotao2.jpg'),
  //     //   name: '螺套',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/luotao3.jpg'),
  //     //   name: '自攻螺套',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/dingweixiao.jpg'),
  //     //   name: '弹簧销',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/dingweixiao2.jpg'),
  //     //   name: '圆柱销',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/qita.jpg'),
  //     //   name: '吊环',
  //     // },
  //     // {
  //     //   img: require('@/assets/img/qita2.jpg'),
  //     //   name: '内六角扳手',
  //     // },
  //   ],
  // },
  // {
  //   title: '意大利 Bordignon博鼎强力弹簧 ',
  //   key: '4',
  //   type: 'appstore',
  //   detail:
  //     'Bordignon博鼎强力弹簧,适于安装在其它弹簧无法瞒足，且空间受限的零件中。降低50%装配空间，同时减少了产品的重量和材料成本，降低整体的成本费用',
  //   productList: [
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品4对顶波簧1',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品4对顶波簧2',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品4对顶波簧3',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品4对顶波簧4',
  //     },
  //   ],
  // },
  // {
  //   title: 'UBC轴承',
  //   key: '5',
  //   type: 'appstore',
  //   detail:
  //     'UBC轴承,适于安装在其它弹簧无法瞒足，且空间受限的零件中。降低50%装配空间，同时减少了产品的重量和材料成本，降低整体的成本费用',
  //   productList: [
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品5对顶波簧1',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品5对顶波簧2',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品5对顶波簧3',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品5对顶波簧4',
  //     },
  //   ],
  // },
  // {
  //   title: 'AXPB直线导轨',
  //   key: '6',
  //   type: 'appstore',
  //   detail:
  //     'AXPB直线导轨,适于安装在其它弹簧无法瞒足，且空间受限的零件中。降低50%装配空间，同时减少了产品的重量和材料成本，降低整体的成本费用',
  //   productList: [
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品6对顶波簧1',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品6对顶波簧2',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品6对顶波簧3',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品6对顶波簧4',
  //     },
  //   ],
  // },
  // {
  //   title: '丹麦HOLM密封产品',
  //   key: '7',
  //   type: 'appstore',
  //   detail:
  //     '丹麦HOLM密封产品,适于安装在其它弹簧无法瞒足，且空间受限的零件中。降低50%装配空间，同时减少了产品的重量和材料成本，降低整体的成本费用',
  //   productList: [
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品7对顶波簧1',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品7对顶波簧2',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品7对顶波簧3',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品7对顶波簧4',
  //     },
  //   ],
  // },
  // {
  //   title: '主轴弹簧',
  //   key: '8',
  //   type: 'appstore',
  //   detail:
  //     '主轴弹簧,适于安装在其它弹簧无法瞒足，且空间受限的零件中。降低50%装配空间，同时减少了产品的重量和材料成本，降低整体的成本费用',
  //   productList: [
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品8对顶波簧1',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品8对顶波簧2',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品8对顶波簧3',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品8对顶波簧4',
  //     },
  //   ],
  // },
  // {
  //   title: '弹性件',
  //   key: '9',
  //   type: 'appstore',
  //   detail:
  //     '弹性件,适于安装在其它弹簧无法瞒足，且空间受限的零件中。降低50%装配空间，同时减少了产品的重量和材料成本，降低整体的成本费用',
  //   productList: [
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品1对顶波簧1',
  //     },
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品1对顶波簧2',
  //     },
  //   ],
  // },
  // {
  //   title: '紧固件',
  //   key: '10',
  //   type: 'appstore',
  //   detail:
  //     '紧固件,适于安装在其它弹簧无法瞒足，且空间受限的零件中。降低50%装配空间，同时减少了产品的重量和材料成本，降低整体的成本费用',
  //   productList: [
  //     {
  //       img: require('@/assets/img/product-img1.jpg'),
  //       name: '产品1对顶波簧1',
  //     },
  //   ],
  // },
]

export { layoutMockJson }
