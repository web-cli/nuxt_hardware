const layoutMockJson = [
  {
    title: 'McMASTER-CARR',
    key: '1',
    type: 'appstore',
    url: 'mcmastercarr',
    logo: require('@/assets/img/third/product-type/mcmastercarr.png'),
    detail:
      'McMaster-carr中国代理是 深圳市北富联机电有限公司的主营品牌，其使用领域较为广泛，mcmastercarr官网有DIN, AMSE, ASTM, JIS, ISO, Mil.Spec., CSA, FDA Compliant等标准。有低强度到高强度的各种高精密五金紧固件，如内六角螺钉、六角头螺钉、销钉、自攻螺丝、机米螺丝、弹簧柱塞、吊环、轴肩螺丝、螺母、螺套、铆钉、垫圈垫片、轴承、弹簧标准紧固件。',
    productList: [
      {
        img: require('@/assets/img/second/luosi-1.png'),
        name: 'mcmaster内六角螺丝',
        alt: '北富联的六角螺丝',
        key: '1',
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
        key: '2',
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
              img: require('@/assets/img/third/2.0.png'),
              name: '不锈钢螺丝',
              alt: 'mcmaster不锈钢螺丝-northfull.com',
              desc: '圆头不锈钢螺丝，由18-8不锈钢组成，具有很强化学腐蚀性作用',
            },
            {
              img: require('@/assets/img/third/2.1.png'),
              name: '不锈钢装订桶螺钉',
              alt: 'mcmaster不锈钢装订桶螺钉-northfull.com',
              desc:
                '将抢管与螺钉一起搭配，或者与其他类型的螺钉搭配以达到紧固件的作用，具有很强耐化学腐蚀性的效果。',
            },
            {
              img: require('@/assets/img/third/2.2.png'),
              name: '316不锈钢圆头螺钉  ',
              alt: 'mcmaster316不锈钢圆头螺钉  -northfull.com',
              desc: '采用316不锈钢制作而成，具有超强的防化学腐蚀性作用。',
            },
            {
              img: require('@/assets/img/third/2.3.png'),
              name: '装订桶用钢螺丝',
              alt: 'mcmaster装订桶用钢螺丝-northfull.com',
              desc: '该种螺丝比肩螺丝短，通常适用于薄材料中。',
            },
            {
              img: require('@/assets/img/third/2.4.png'),
              name: '梅花圆头螺丝 ',
              alt: 'mcmaster梅花圆头螺丝   -northfull.com',
              desc: '梅花圆头螺丝',
            },
            {
              img: require('@/assets/img/third/2.5.png'),
              name: '密封圆头螺丝',
              alt: 'mcmaster密封圆头螺丝-northfull.com',
              desc: '采用密封圆头，可防止泄露并密封污染物.',
            },
            {
              img: require('@/assets/img/third/2.6.png'),
              name: '排气圆头螺丝 ',
              alt: 'mcmaster排气圆头螺丝-northfull.com',
              desc: '排气圆头螺丝可以很好的排出螺钉下面节流的气体和流体。',
            },
            {
              img: require('@/assets/img/third/2.7.png'),
              name: '左旋圆头螺丝 ',
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
        key: '3',
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
        key: '4',
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
        name: '自攻螺丝',
        alt: '北富联的自攻螺钉',
        hasDetai: true, // 是否有详情
        key: '5',
        expand: {
          title: '自攻螺丝系列',
          subList: [
            {
              img: require('@/assets/img/third/5.png'),
              name: '钣金自攻螺丝 ',
              alt: 'mcmaster钣金自攻螺丝-northfull.com',
              desc:
                '钣金螺丝固定厚度不超过0.200英寸，通常钣金自攻螺丝厚度大于0.260螺丝需要一个启动器孔',
            },
            {
              img: require('@/assets/img/third/5.1.png'),
              name: '金属制螺纹螺丝 ',
              alt: 'mcmaster金属制螺纹螺丝-northfull.com',
              desc: '带螺纹螺丝，具有很强的抗震装配。',
            },
            {
              img: require('@/assets/img/third/5.2.png'),
              name: '金属自攻螺丝 ',
              alt: 'mcmaster金属自攻螺丝-northfull.com',
              desc:
                '自攻螺丝在旋转时钻出螺纹，和螺纹成型螺丝作对比，所需要的驱动扭动力较小，因此对材料的应力小很多。',
            },
            {
              img: require('@/assets/img/third/5.4.png'),
              name: '金属钻孔自攻螺丝 ',
              alt: 'mcmaster金属钻孔自攻螺丝-northfull.com',
              desc:
                '钻孔螺钉可以自固定0.500英寸的金属，很大效率上节约了时间和经历成本。',
            },
            {
              img: require('@/assets/img/third/5.3.png'),
              name: '木螺丝 ',
              alt: 'mcmaster木螺丝-northfull.com',
              desc: '采取的材质和平常用的不一样',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/xiao.jpg'),
        name: '销',
        alt: '北富联的销',
        hasDetai: true, // 是否有详情
        key: '6',
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
        img: require('@/assets/img/third/8.png'),
        name: '螺钉',
        alt: '北富联的螺钉',
        key: '7',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺钉系列',
          subList: [
            {
              img: require('@/assets/img/third/8.png'),
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
        key: '8',
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
        img: require('@/assets/img/third/9.0.png'),
        name: '螺纹杆&螺柱',
        alt: '北富联的螺纹杆&螺柱',
        key: '9',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺纹杆&螺柱',
          subList: [
            {
              img: require('@/assets/img/third/9.0.png'),
              name: '八级螺纹杆 ',
              alt: 'mcmaster八级螺纹杆-northfull.com',
              desc: '高强度螺纹杆',
            },
            {
              img: require('@/assets/img/third/9.1.png'),
              name: '9、10级公制高强度螺纹杆 ',
              alt: 'mcmaster9、10级公制高强度螺纹杆-northfull.com',
              desc: '图中是9级、10级螺纹杆，比中强度杆坚固25%左右',
            },
            {
              img: require('@/assets/img/third/9.2.png'),
              name: 'B7级别-左螺纹中强度钢螺纹杆 ',
              alt: 'mcmasterB7级别-左螺纹中强度钢螺纹杆-northfull.com',
              desc: 'B7级别-左螺纹中强度钢螺纹杆',
            },
            {
              img: require('@/assets/img/third/9.3.png'),
              name: '公制低强度钢螺纹杆 ',
              alt: 'mcmaster公制低强度钢螺纹杆-northfull.com',
              desc:
                '该螺纹杆的硬度大约是中强度螺纹杆的50%，主要用于轻型悬挂，安装和固定使用',
            },
            {
              img: require('@/assets/img/third/9.4.png'),
              name: '不锈钢螺纹杆 ',
              alt: 'mcmaster不锈钢螺纹杆-northfull.com',
              desc: '采用公制尺寸，具有良好的化学防腐性，不容易生锈。',
            },
            {
              img: require('@/assets/img/third/9.5.png'),
              name: '316超级防腐蚀性不锈钢螺纹杆 ',
              alt: 'mcmaster316超级防腐蚀性不锈钢螺纹杆-northfull.com',
              desc:
                '采用316材质，更加耐腐蚀性，对化学药水和盐水具有很好的抗腐蚀的效果。',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/third/00.png'),
        name: '螺母',
        alt: '北富联的螺母',
        key: '10',
        hasDetai: true, // 是否有详情
        expand: {
          title: '螺母系列',
          subList: [
            {
              img: require('@/assets/img/third/00.png'),
              name: '中强度钢六角螺母 ',
              alt: 'mcmaster中强度钢六角螺母-northfull.com',
              desc: '5级六角螺母适用于大多数机械设备的紧固件。',
            },
            {
              img: require('@/assets/img/third/01.png'),
              name: '8级-中强度钢六角螺母',
              alt: 'mcmaster8级-中强度钢六角螺母-northfull.com',
              desc: '该六角螺母强度较高，常用于紧固大多数设备和机械。',
            },
            {
              img: require('@/assets/img/third/03.png'),
              name: '左螺纹中强度钢六角螺母',
              alt: 'mcmaster左螺纹中强度钢六角螺母-northfull.com',
              desc:
                '该mcmaster-carr六角螺母向左旋转拧紧，一旦紧固后，可抵抗逆时针运动的松动。',
            },
            {
              img: require('@/assets/img/third/01a.png'),
              name: 'JIS中强度钢六角螺母 ',
              alt: 'mcmasterJIS中强度钢六角螺母-northfull.com',
              desc: 'mcmaster-carr这款六角螺母符合JIS（日本工业标准）B1181。',
            },
            {
              img: require('@/assets/img/third/0ab.png'),
              name: '10级高强度钢六角螺母 ',
              alt: 'mcmaster10级高强度钢六角螺母-northfull.com',
              desc:
                '该McMaster-Carr螺母比中强度钢六角螺母坚固25%左右，受用型很高。',
            },
            {
              img: require('@/assets/img/third/01c.png'),
              name: '低强度钢六角螺母 ',
              alt: 'mcmaster低强度钢六角螺母-northfull.com',
              desc:
                '这些mcmaster螺母强度是中强度钢六角螺丝的一半，常用于轻型紧固件应用中。',
            },
            {
              img: require('@/assets/img/third/01d.png'),
              name: '米尔规格低强度钢六角螺母',
              alt: 'mcmaster米尔规格低强度钢六角螺母-northfull.com',
              desc:
                '这些mcmastercarr六角螺母采用高端的材料，结构符合军事标准。',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/second/berg3.jpg'),
        name: '弹簧垫',
        alt: '北富联的弹簧垫',
        key: '11',
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
        key: '12',
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
        img: require('@/assets/img/second/berg8.jpg'),
        name: '定位销',
        alt: '北富联的定位销',
        key: '13',
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
        img: require('@/assets/img/second/berg6.jpg'),
        name: '铆钉',
        alt: '北富联的铆钉',
        key: '14',
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
        key: '15',
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
        img: require('@/assets/img/third/10.png'),
        name: '五金螺母紧固件',
        alt: '北富联的拉铆螺母',
        hasDetai: true, // 是否有详情
        key: '16',
        expand: {
          title: '拉铆螺母系列',
          subList: [
            {
              img: require('@/assets/img/third/10.png'),
              name: '拉铆螺母',
              alt: 'BERG拉铆螺母-northfull.com',
              desc:
                '生产范围：公制：M1.2 ~ M42;美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙',
            },
          ],
        },
      },
      {
        img: require('@/assets/img/fourth/qita.png'),
        name: '其他',
        alt: '北富联的其他',
        hasDetai: true, // 是否有详情
        key: '17',
        expand: {
          title: '其他系列',
          subList: [
            {
              img: require('@/assets/img/fourth/qita.png'),
              name: '其他',
              alt: 'BERG其他-northfull.com',
              desc:
                'Mcmaster产品：轴承、方形螺钉、五角螺钉、T型螺钉、杆端、梯形螺栓、钉子、管道、管接头、塑料网、振动器、过滤网等mcmaster官网五金紧固件。\n mcmaster范围：公制：M1.2 ~ M42；美制: #2 ~ 1/4材质：合金钢 不锈钢 A2, A4 (SUS304, 316)碳钢 镀锌, 镀镍 铝 铜 尼龙等',
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
        img: require('@/assets/img/third/zigongluotao1.png'),
        name: 'Helicoil自攻螺套',
        alt: 'Helicoil自攻螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 1,
        expand: {
          title: 'Helicoil自攻螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/zigongluotao1.png'),
              name: 'Helicoil自攻螺套',
              alt: 'Helicoil自攻螺套-northfull.com',
              desc:
                'helicoil自攻螺套采用自攻镶嵌件，带一字槽和内外螺纹的自攻镶嵌，helicoil自攻螺纹受用较广。产品型号较多，M2-M30不等；材质有碳钢、不锈钢，硬度超强；多种自攻螺套镶嵌规格可选，更多内容尚未展示，有需要请联系我们北富联机电有限公司。',
            },
          ],
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
        img: require('@/assets/img/third/chaxiaoluotao.png'),
        name: 'helicoil插销螺套',
        alt: 'helicoil插销螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 2,
        expand: {
          title: 'helicoil插销螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/chaxiaoluotao.png'),
              name: 'helicoil插销螺套',
              alt: 'helicoil插销螺套-northfull.com',
              desc:
                '插销螺套对腐蚀、丝滑的螺纹孔可以快速有效的修复，使用和安装都很简单。helicoil插销螺套与其他螺纹护套相对比，具有更强劲的坚固作用，特别是军工、铁路机车、航天等领域对于内螺纹强度较高的产品上。',
            },
          ],
        },
        detailList: [
          // {
          //   title: '规格：',
          //   list: [
          //     'Helicoil螺纹护套螺纹规格： helicoil 螺套按螺纹规格可分为公制（粗牙和细牙）、统一粗牙螺套（UNC）和统一细牙螺套（UNF），另外还有英国标准（粗牙BSW和细牙BSF）和管螺纹（G）规格的螺纹护套',
          //     'Helicoil 螺纹护套长度规格：通常螺套的长度按安装在其内的螺栓的公称直径d的倍数选择，每种螺套有1d，1.5d，2d，2.5d，3d长度。例如：M6，长1.5d的螺套，安装后可形成M6，长度为9mm的内螺纹孔',
          //   ],
          // },
          // {
          //   title: '分类：',
          //   list: [
          //     'Helicoil螺套按其自身结构可分为：普通型（Free Running）和锁紧型（Screw Lock），锁紧型螺套是在螺套的中间通过一圈或多圈多边形线圈来实现对安装在其中的螺栓产生夹持作用，起到防松的效果。附加的防松垫片等就没有必要了，这样可以降低成本并确保简化装配',
          //   ],
          // },
          // {
          //   title: '标准：',
          //   list: [
          //     '化学成分和物理性能符合AS7245，ASME SA-497，AS7246标准。',
          //     '符合军事标准MS21208，NASM21209，NASM122076至NASM12275，NASM124651至NASM124850，MS9018和 军事规格NASM8846。',
          //     '符合航空标准MA3279，MA3280，MA3281，MA3329，MA3330，MA3331，MA1565',
          //     '符合ISO9001-ISO/TS 16949标准。',
          //   ],
          // },
        ],
      },
      {
        img: require('@/assets/img/third/wuweiluotao.png'),
        name: 'Helicoil无尾螺套',
        alt: 'Helicoil无尾螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 3,
        expand: {
          title: 'Helicoil无尾螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/wuweiluotao.png'),
              name: 'Helicoil无尾螺套',
              alt: 'Helicoil无尾螺套-northfull.com',
              desc:
                'helicoil无尾螺套是没有安装柄钢丝螺套，安装过程中没有方向性要求，安装非常方便。Helicoil无尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。 ',
            },
          ],
        },
        detailList: [
          // {
          //   title: '规格：',
          //   list: [
          //     'Helicoil螺纹护套螺纹规格： helicoil 螺套按螺纹规格可分为公制（粗牙和细牙）、统一粗牙螺套（UNC）和统一细牙螺套（UNF），另外还有英国标准（粗牙BSW和细牙BSF）和管螺纹（G）规格的螺纹护套',
          //     'Helicoil 螺纹护套长度规格：通常螺套的长度按安装在其内的螺栓的公称直径d的倍数选择，每种螺套有1d，1.5d，2d，2.5d，3d长度。例如：M6，长1.5d的螺套，安装后可形成M6，长度为9mm的内螺纹孔',
          //   ],
          // },
          // {
          //   title: '分类：',
          //   list: [
          //     'Helicoil螺套按其自身结构可分为：普通型（Free Running）和锁紧型（Screw Lock），锁紧型螺套是在螺套的中间通过一圈或多圈多边形线圈来实现对安装在其中的螺栓产生夹持作用，起到防松的效果。附加的防松垫片等就没有必要了，这样可以降低成本并确保简化装配',
          //   ],
          // },
          // {
          //   title: '标准：',
          //   list: [
          //     '化学成分和物理性能符合AS7245，ASME SA-497，AS7246标准。',
          //     '符合军事标准MS21208，NASM21209，NASM122076至NASM12275，NASM124651至NASM124850，MS9018和 军事规格NASM8846。',
          //     '符合航空标准MA3279，MA3280，MA3281，MA3329，MA3330，MA3331，MA1565',
          //     '符合ISO9001-ISO/TS 16949标准。',
          //   ],
          // },
        ],
      },
      {
        img: require('@/assets/img/third/youweiluotao.png'),
        name: 'Helicoil有尾螺套',
        alt: 'Helicoil有尾螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 4,
        expand: {
          title: 'Helicoil有尾螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/youweiluotao.png'),
              name: 'Helicoil有尾螺套',
              alt: 'Helicoil有尾螺套-northfull.com',
              desc:
                'helicoil有尾螺套相对于无尾螺套是多了一条“尾巴”，helicoil有尾螺纹护套安装非常方便。Helicoil有尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/luowenhutao.png'),
        name: 'helicoil螺纹护套',
        alt: 'helicoil螺纹护套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 5,
        expand: {
          title: 'helicoil螺纹护套系列',
          subList: [
            {
              img: require('@/assets/img/third/luowenhutao.png'),
              name: 'helicoil螺纹护套',
              alt: 'helicoil螺纹护套-northfull.com',
              desc:
                'helicoil螺纹护套适用于螺纹连接，具有结构性良好，方便使用的功能，螺套安装于螺孔或者螺母中，可以减轻螺纹牙因为受力不均匀和抵抗冲击震动的效果，很大程度提高了螺纹的使用寿命，减少螺纹的抗腐蚀性和磨损程度，helicoil螺套多应用于航空行业、国防行业、汽车工业、机电设备行业等',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/luowenhutao.png'),
        name: 'helicoil不锈钢螺套',
        alt: 'helicoil不锈钢螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 6,
        expand: {
          title: 'helicoil不锈钢螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/luowenhutao.png'),
              name: 'helicoil不锈钢螺套',
              alt: 'helicoil不锈钢螺套-northfull.com',
              desc:
                'helicoil螺纹护套采用不锈钢材质，可以抵抗化学防腐蚀性，不容易生锈。',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/luowenhutao.png'),
        name: 'helicoil钢丝螺套',
        alt: 'helicoil钢丝螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 7,
        expand: {
          title: 'helicoil钢丝螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/luowenhutao.png'),
              name: 'helicoil钢丝螺套',
              alt: 'helicoil钢丝螺套-northfull.com',
              desc:
                '工业高精密紧固件Helicoil钢丝螺套广泛应用于航空和军事行业，可提供高强度的helicoil内置螺纹。',
            },
          ],
        },
        detailList: [],
      },
    ],
  },
  {
    title: 'Recoil',
    key: '3',
    type: 'appstore',
    url: 'recoil',
    logo: require('@/assets/img/third/product-type/recoil.png'),
    detail:
      'recoil螺纹护套具有多种型号，有碳钢、不锈钢等材质的recoil螺套，螺套具有很好的紧固作用，具有超强的硬度，更多recoil螺套请详细咨询客服。',
    productList: [
      // {
      //   img: require('@/assets/img/third/KENSERTSLOGO.png'),
      //   name: 'Keensert插销螺套',
      //   alt: 'Keensert插销螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 0,
      //   expand: {
      //     title: 'Keensert插销螺套',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/KENSERTSLOGO.png'),
      //         name: 'Keensert插销螺套',
      //         alt: 'Keensert插销螺套-northfull.com',
      //         desc:
      //           'Keensert插销螺套主要由不锈钢1.4305 / AISI 303制成，KeensertS®螺纹嵌件是防止螺纹在机械或精密工程，航空和军用等领域被剥离的完美解决方案。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      {
        img: require('@/assets/img/third/zigongluotao1.png'),
        name: 'Recoil自攻螺套',
        alt: 'Recoil自攻螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 1,
        expand: {
          title: 'Recoil自攻螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/zigongluotao1.png'),
              name: 'Recoil自攻螺套',
              alt: 'Recoil自攻螺套-northfull.com',
              desc:
                'Recoil自攻螺套采用自攻镶嵌件，带一字槽和内外螺纹的自攻镶嵌，Recoil自攻螺纹受用较广。产品型号较多，M2-M30不等；材质有碳钢、不锈钢，硬度超强；多种自攻螺套镶嵌规格可选，更多内容尚未展示，有需要请联系我们北富联机电有限公司。',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/chaxiaoluotao.png'),
        name: 'Recoil插销螺套',
        alt: 'Recoil插销螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 2,
        expand: {
          title: 'Recoil插销螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/chaxiaoluotao.png'),
              name: 'Recoil插销螺套',
              alt: 'Recoil插销螺套-northfull.com',
              desc:
                '插销螺套对腐蚀、丝滑的螺纹孔可以快速有效的修复，使用和安装都很简单。Recoil插销螺套与其他螺纹护套相对比，具有更强劲的坚固作用，特别是军工、铁路机车、航天等领域对于内螺纹强度较高的产品上。',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/wuweiluotao.png'),
        name: 'Recoil无尾螺套',
        alt: 'Recoil无尾螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 3,
        expand: {
          title: 'Recoil无尾螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/wuweiluotao.png'),
              name: 'Recoil无尾螺套',
              alt: 'Recoil无尾螺套-northfull.com',
              desc:
                'Recoil无尾螺套是没有安装柄钢丝螺套，安装过程中没有方向性要求，安装非常方便。Recoil无尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。 ',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/youweiluotao.png'),
        name: 'Recoil有尾螺套',
        alt: 'Recoil有尾螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 4,
        expand: {
          title: 'Recoil有尾螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/youweiluotao.png'),
              name: 'Recoil有尾螺套',
              alt: 'Recoil有尾螺套-northfull.com',
              desc:
                'Recoil有尾螺套相对于无尾螺套是多了一条“尾巴”，Recoil有尾螺纹护套安装非常方便。Recoil有尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/luowenhutao.png'),
        name: 'Recoil螺纹护套',
        alt: 'Recoil螺纹护套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 5,
        expand: {
          title: 'Recoil螺纹护套系列',
          subList: [
            {
              img: require('@/assets/img/third/luowenhutao.png'),
              name: 'Recoil螺纹护套',
              alt: 'Recoil螺纹护套-northfull.com',
              desc:
                'Recoil螺纹护套适用于螺纹连接，具有结构性良好，方便使用的功能，螺套安装于螺孔或者螺母中，可以减轻螺纹牙因为受力不均匀和抵抗冲击震动的效果，很大程度提高了螺纹的使用寿命，减少螺纹的抗腐蚀性和磨损程度，helicoil螺套多应用于航空行业、国防行业、汽车工业、机电设备行业等',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/luowenhutao.png'),
        name: 'Recoil不锈钢螺套',
        alt: 'Recoil不锈钢螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 6,
        expand: {
          title: 'Recoil不锈钢螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/luowenhutao.png'),
              name: 'Recoil不锈钢螺套',
              alt: 'Recoil不锈钢螺套-northfull.com',
              desc:
                'Recoil螺纹护套采用不锈钢材质，可以抵抗化学防腐蚀性，不容易生锈。',
            },
          ],
        },
        detailList: [],
      },
      {
        img: require('@/assets/img/third/luowenhutao.png'),
        name: 'Recoil钢丝螺套',
        alt: 'Recoil钢丝螺套-northfull.com',
        hasDetai: true, // 是否有详情
        key: 7,
        expand: {
          title: 'Recoil钢丝螺套系列',
          subList: [
            {
              img: require('@/assets/img/third/luowenhutao.png'),
              name: 'Recoil钢丝螺套',
              alt: 'Recoil钢丝螺套-northfull.com',
              desc:
                '工业高精密紧固件Recoil钢丝螺套广泛应用于航空和军事行业，可提供高强度的Recoil内置螺纹。',
            },
          ],
        },
        detailList: [],
      },
    ],
  },
  {
    title: 'KATO',
    key: '4',
    type: 'appstore',
    url: 'kato',
    logo: require('@/assets/img/third/product-type/kato.png'),
    detail:
      'Kato工业五金紧固件固有多种自攻螺套、不锈钢螺套、无尾螺套、有尾螺套等，型号和材质较多，具体KATO精密五金紧固件请咨询深圳市北富联机电客服。',
    productList: [
      // {
      //   img: require('@/assets/img/third/luowenhutao.png'),
      //   name: 'KATO钢丝螺套',
      //   alt: 'KATO钢丝螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 7,
      //   expand: {
      //     title: 'KATO钢丝螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/luowenhutao.png'),
      //         name: 'KATO钢丝螺套',
      //         alt: 'KATO钢丝螺套-northfull.com',
      //         desc:
      //           '工业高精密紧固件KATO钢丝螺套广泛应用于航空和军事行业，可提供高强度的KATO内置螺纹。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/luowenhutao.png'),
      //   name: 'KATO不锈钢螺套',
      //   alt: 'KATO不锈钢螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 6,
      //   expand: {
      //     title: 'KATO不锈钢螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/luowenhutao.png'),
      //         name: 'KATO不锈钢螺套',
      //         alt: 'KATO不锈钢螺套-northfull.com',
      //         desc:
      //           'KATO螺纹护套采用不锈钢材质，可以抵抗化学防腐蚀性，不容易生锈。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/wuweiluotao.png'),
      //   name: 'KATO无尾螺套',
      //   alt: 'KATO无尾螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 3,
      //   expand: {
      //     title: 'KATO无尾螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/wuweiluotao.png'),
      //         name: 'KATO无尾螺套',
      //         alt: 'KATO无尾螺套-northfull.com',
      //         desc:
      //           'KATO无尾螺套是没有安装柄钢丝螺套，安装过程中没有方向性要求，安装非常方便。KATO无尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。 ',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/youweiluotao.png'),
      //   name: 'KATO有尾螺套',
      //   alt: 'KATO有尾螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 4,
      //   expand: {
      //     title: 'KATO有尾螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/youweiluotao.png'),
      //         name: 'KATO有尾螺套',
      //         alt: 'KATO有尾螺套-northfull.com',
      //         desc:
      //           'KATO有尾螺套相对于无尾螺套是多了一条“尾巴”，KATO有尾螺纹护套安装非常方便。KATO有尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/luowenhutao.png'),
      //   name: 'KATO螺纹护套',
      //   alt: 'KATO螺纹护套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 5,
      //   expand: {
      //     title: 'KATO螺纹护套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/luowenhutao.png'),
      //         name: 'KATO螺纹护套',
      //         alt: 'KATO螺纹护套-northfull.com',
      //         desc:
      //           'KATO螺纹护套适用于螺纹连接，具有结构性良好，方便使用的功能，螺套安装于螺孔或者螺母中，可以减轻螺纹牙因为受力不均匀和抵抗冲击震动的效果，很大程度提高了螺纹的使用寿命，减少螺纹的抗腐蚀性和磨损程度，helicoil螺套多应用于航空行业、国防行业、汽车工业、机电设备行业等',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
    ],
  },
  {
    title: 'Ensat',
    key: '5',
    type: 'appstore',
    url: 'ensat',
    logo: require('@/assets/img/third/product-type/ensat.png'),
    detail:
      'Ensat螺纹护套具有多种型号，有碳钢、不锈钢等材质的Ensat螺套，螺套具有很好的紧固作用，具有超强的硬度，更多Ensat螺套请详细咨询客服。',
    productList: [
      // {
      //   img: require('@/assets/img/third/zigongluotao1.png'),
      //   name: 'Ensat自攻螺套',
      //   alt: 'Ensat自攻螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 1,
      //   expand: {
      //     title: 'Ensat自攻螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/zigongluotao1.png'),
      //         name: 'Ensat自攻螺套',
      //         alt: 'Ensat自攻螺套-northfull.com',
      //         desc:
      //           'Ensat自攻螺套采用自攻镶嵌件，带一字槽和内外螺纹的自攻镶嵌，Ensat自攻螺纹受用较广。产品型号较多，M2-M30不等；材质有碳钢、不锈钢，硬度超强；多种自攻螺套镶嵌规格可选，更多内容尚未展示，有需要请联系我们北富联机电有限公司。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/chaxiaoluotao.png'),
      //   name: 'Ensat插销螺套',
      //   alt: 'Ensat插销螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 2,
      //   expand: {
      //     title: 'Ensat插销螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/chaxiaoluotao.png'),
      //         name: 'Ensat插销螺套',
      //         alt: 'Ensat插销螺套-northfull.com',
      //         desc:
      //           '插销螺套对腐蚀、丝滑的螺纹孔可以快速有效的修复，使用和安装都很简单。Ensat插销螺套与其他螺纹护套相对比，具有更强劲的坚固作用，特别是军工、铁路机车、航天等领域对于内螺纹强度较高的产品上。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/wuweiluotao.png'),
      //   name: 'Ensat无尾螺套',
      //   alt: 'Ensat无尾螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 3,
      //   expand: {
      //     title: 'Ensat无尾螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/wuweiluotao.png'),
      //         name: 'Ensat无尾螺套',
      //         alt: 'Ensat无尾螺套-northfull.com',
      //         desc:
      //           'Ensat无尾螺套是没有安装柄钢丝螺套，安装过程中没有方向性要求，安装非常方便。Ensat无尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。 ',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/youweiluotao.png'),
      //   name: 'Ensat有尾螺套',
      //   alt: 'Ensat有尾螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 4,
      //   expand: {
      //     title: 'Ensat有尾螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/youweiluotao.png'),
      //         name: 'Ensat有尾螺套',
      //         alt: 'Ensat有尾螺套-northfull.com',
      //         desc:
      //           'Ensat有尾螺套相对于无尾螺套是多了一条“尾巴”，Ensat有尾螺纹护套安装非常方便。Ensat有尾螺套具有多种尺寸可以选择，满足无尾螺套的需求。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/luowenhutao.png'),
      //   name: 'Ensat螺纹护套',
      //   alt: 'Ensat螺纹护套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 5,
      //   expand: {
      //     title: 'Ensat螺纹护套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/luowenhutao.png'),
      //         name: 'Ensat螺纹护套',
      //         alt: 'Ensat螺纹护套-northfull.com',
      //         desc:
      //           'Ensat螺纹护套适用于螺纹连接，具有结构性良好，方便使用的功能，螺套安装于螺孔或者螺母中，可以减轻螺纹牙因为受力不均匀和抵抗冲击震动的效果，很大程度提高了螺纹的使用寿命，减少螺纹的抗腐蚀性和磨损程度，helicoil螺套多应用于航空行业、国防行业、汽车工业、机电设备行业等',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/luowenhutao.png'),
      //   name: 'Ensat不锈钢螺套',
      //   alt: 'Ensat不锈钢螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 6,
      //   expand: {
      //     title: 'Ensat不锈钢螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/luowenhutao.png'),
      //         name: 'Ensat不锈钢螺套',
      //         alt: 'Ensat不锈钢螺套-northfull.com',
      //         desc:
      //           'Ensat螺纹护套采用不锈钢材质，可以抵抗化学防腐蚀性，不容易生锈。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
      // {
      //   img: require('@/assets/img/third/luowenhutao.png'),
      //   name: 'Ensat钢丝螺套',
      //   alt: 'Ensat钢丝螺套-northfull.com',
      //   hasDetai: true, // 是否有详情
      //   key: 7,
      //   expand: {
      //     title: 'Ensat钢丝螺套系列',
      //     subList: [
      //       {
      //         img: require('@/assets/img/third/luowenhutao.png'),
      //         name: 'Ensat钢丝螺套',
      //         alt: 'Ensat钢丝螺套-northfull.com',
      //         desc:
      //           '工业高精密紧固件Ensat钢丝螺套广泛应用于航空和军事行业，可提供高强度的Ensat内置螺纹。',
      //       },
      //     ],
      //   },
      //   detailList: [],
      // },
    ],
  },
  {
    title: 'BERG',
    key: '6',
    type: 'appstore',
    url: 'berg',
    logo: require('@/assets/img/tab2-logo.png'),
    detail:
      'Berg是全球微型精密机械零件的领先制造商。我们公司主要销售Berg任何材质的圆柱销。圆柱销属于定位销，用于固定零件之间的相对位置。它是组合加工和装配时候的重要辅助零件',
    productList: [
      {
        img: require('@/assets/img/third/berg1.png'),
        name: '定位销',
        alt: '北富联机电berg定位销高精密紧固件',
        hasDetai: true, // 是否有详情
        key: 1,
        expand: {
          title: '定位销系列',
          subList: [
            {
              img: require('@/assets/img/third/berg1.png'),
              name: '定位销',
              alt: '北富联机电berg定位销高精密紧固件',
              desc:
                'Berg是全球微型精密机械零件的领先制造商。我们深圳市北富联机电有限公司公司主要销售WMBerg任何材质的圆柱销。BERG圆柱销属于BERG定位销，用于固定零件之间的相对位置，Berg销钉是组合加工和装配时候的重要辅助零件。',
            },
          ],
        },
        detailList: [
          {
            title: '详细介绍：',
            list: [
              '计量单位选择：英制、公制',
              '类型：CLEVIS，COTTER/DOWEL，GROOVED，SPIRAL，TAPER，SPRING',
              '材料：302不锈钢，303不锈钢，416不锈钢，420不锈钢，碳素钢;直径：0.031英寸-0.4999英寸',
              '直径大小：0.031英寸-0.4999英寸；0.8mm-12mm',
              'Berg定位销作用：主要做紧固作用，是较为常用的一种五金紧固件',
              '应用场景：工业、汽车、航空、固体照明、家具、云计算、消费电子等',
            ],
          },
        ],
      },
      {
        img: require('@/assets/img/third/berg2.png'),
        name: '轴承配件',
        alt: 'northfull北富联的berg轴承配件、高端berg销',
        hasDetai: true, // 是否有详情
        key: 2,
        expand: {
          title: '轴承配件系列',
          subList: [
            {
              img: require('@/assets/img/third/berg2.png'),
              name: '轴承配件',
              alt: 'northfull北富联的berg轴承配件、高端berg销',
              desc: 'northfull北富联的berg轴承配件、高端berg销',
            },
          ],
        },
        detailList: [
          {
            title: '详细介绍：',
            list: [
              '计量单位选择：英制、公制',
              '类型：轴承适配器、轴承座板、矩形柱、间距等',
              '材料：铝阳极氧化、不锈钢、热处理不锈钢;轴径：1/8、3/16、1/4',
            ],
          },
        ],
      },
      {
        img: require('@/assets/img/third/berg3.png'),
        name: '轮毂/集线器',
        alt: '深圳北富联berg集线器。高精密紧固件berg轮毂',
        hasDetai: true, // 是否有详情
        key: 3,
        expand: {
          title: '轮毂/集线器系列',
          subList: [
            {
              img: require('@/assets/img/third/berg3.png'),
              name: '轮毂/集线器',
              alt: '深圳北富联berg集线器。高精密紧固件berg轮毂',
              desc: '无',
            },
          ],
        },
        detailList: [
          {
            title: '详细介绍：',
            list: [
              '计量单位选择：英制、公制',
              '类型：固定螺丝领，双齿轮轮廓，螺纹轴夹，轴夹等',
              '材料：1214L钢，303不锈钢，416不锈钢，416不锈钢RC38-45，2024铝阳极氧化，软钢，低碳钢镀镉等；缸径：0.0779-1.25英寸',
            ],
          },
        ],
      },
      {
        img: require('@/assets/img/third/berg4.png'),
        name: 'Berg-O型圈',
        alt: '北富联机电Berg-O型圈',
        hasDetai: true, // 是否有详情
        key: 4,
        expand: {
          title: 'Berg-O型圈系列',
          subList: [
            {
              img: require('@/assets/img/third/berg4.png'),
              name: 'Berg-O型圈',
              alt: '北富联机电Berg-O型圈',
              desc: '无',
            },
          ],
        },
        detailList: [
          {
            title: '详细介绍：',
            list: [
              '计量单位选择：英制、公制',
              '类型：压缩，反背扭，压缩，扩大，扭力等',
              '风格：反背景延伸，压缩，外球承接，实验性等',
              '自由长度：1/4、7/20、3/8、4219/10000、1/2、5/8',
              '线径：0.007-0.075英寸',
              '线径：0.007-0.075英寸',
            ],
          },
        ],
      },
      {
        img: require('@/assets/img/third/berg5.png'),
        name: 'BERG弹簧销',
        alt: '深圳市北富联机电有限公司弹簧销，工业高精密弹簧',
        hasDetai: true, // 是否有详情
        key: 5,
        expand: {
          title: 'BERG弹簧销系列',
          subList: [
            {
              img: require('@/assets/img/third/berg5.png'),
              name: 'BERG弹簧销',
              alt: '深圳市北富联机电有限公司弹簧销，工业高精密弹簧',
              desc: '无',
            },
          ],
        },
        detailList: [
          {
            title: '详细介绍：',
            list: [
              '计量单位选择：英制、公制',
              '类型：压缩，反背扭，压缩，扩大，扭力等',
              '风格：反背景延伸，压缩，外球承接，实验性等',
              '自由长度：1/4、7/20、3/8、4219/10000、1/2、5/8',
              '线径：0.007-0.075英寸',
              '线径：0.007-0.075英寸',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Keensert',
    key: '7',
    type: 'appstore',
    url: 'keensert',
    logo: require('@/assets/img/third/product-type/keensert.jpeg'),
    detail: '',
    productList: [],
  },
]

export { layoutMockJson }
