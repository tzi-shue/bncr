const RspyList = {
    /* 监控信息配置 */
    SpyList: [
        {
            /* 任务名 确保任务名唯一性,因为id根据任务名计算生成*/ 
			Name: 'Spy监控',
            /* 执行的脚本名 */
            Script: 'spy/test.js',
            /* 监听变量 */
            ListenEnv: ['jdzz', 'jdhb', 'mtgh'],
            /* 转换变量 */
            SetEnv: {
                jdzz: 'zhuanzhuan',
                jdhb: 'hongbao',
            },
            /* 超时退出 (秒)*/
            TimeOut: 0,
            /* 间隔时间(秒) */
            Interval: 30,
            /* 运行面板 0 代表 面板管理中的第一个容器 以此类推 */
            RunPanel: [1],
            /* 禁用任务 */
            Disable: false,
        },
		//以下给出几个示例
        {
            Name: '无线',
            Script: '6dylan6_jdm/jd_sevenDay.js',
            ListenEnv: [
                'CJHY_SIGN',
                'jd_sevenDay_activityUrl',
                'LZKJ_SIGN',
                'CJHY_SEVENDAY',
                'LZKJ_SEVENDAY',
            ],
            SetEnv: {
                CJHY_SIGN: 'CJHY_SIGN',
                jd_sevenDay_activityUrl: 'jd_sevenDay_activityUrl',
                LZKJ_SIGN: 'LZKJ_SIGN',
                CJHY_SEVENDAY: 'CJHY_SEVENDAY',
                LZKJ_SEVENDAY: 'LZKJ_SEVENDAY',
            },
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '集卡',
            Script: 'shufflewzc_faker3_main/m_jd_wx_collectCard.js',
            ListenEnv: ['M_WX_COLLECT_CARD_URL'],
            SetEnv: {
                M_WX_COLLECT_CARD_URL: 'M_WX_COLLECT_CARD_URL',
            },
            TimeOut: 80,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '集卡抽奖通用活动',
            Script: 'KingRan_KR/jd_wxCollectCard.js',
            ListenEnv: ['jd_wxCollectCard_activityId'],
            SetEnv: {
                jd_wxCollectCard_activityId: 'jd_wxCollectCard_activityId',
            },
            TimeOut: 80,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'CJ组队瓜分京豆-加密',
            Script: '6dylan6_jdm/jd_cjzdgf.js',
            ListenEnv: ['jd_cjhy_activityId', 'jd_cjhy_activityUrl'],
            SetEnv: {
                jd_cjhy_activityId: 'jd_cjhy_activityId',
                jd_cjhy_activityUrl: 'jd_cjhy_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '粉丝互动通用活动-加密',
            Script: '6dylan6_jdm/jd_wxFansInterActionActivity.js',
            ListenEnv: ['jd_wxFansInterActionActivity_activityId'],
            SetEnv: {
                jd_wxFansInterActionActivity_activityId: 'jd_wxFansInterActionActivity_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'LZ组队瓜分京豆-加密',
            Script: '6dylan6_jdm/jd_zdjr.js',
            ListenEnv: ['jd_zdjr_activityId', 'jd_zdjr_activityUrl'],
            SetEnv: {
                jd_zdjr_activityId: 'jd_zdjr_activityId',
                jd_zdjr_activityUrl: 'jd_zdjr_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '邀请入会有礼（lzkj_loreal）',
            Script: '6dylan6_jdm/jd_lzkj_loreal_invite.js',
            ListenEnv: ['jd_lzkj_loreal_invite_url'],
            SetEnv: {
                jd_lzkj_loreal_invite_url: 'jd_lzkj_loreal_invite_url',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '积分兑换京豆（超级会员）',
            Script: '6dylan6_jdm/jd_pointExgBeans.js',
            ListenEnv: ['jd_pointExgBeans_activityUrl'],
            SetEnv: {
                jd_pointExgBeans_activityUrl: 'jd_pointExgBeans_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '邀请入会赢好礼（京耕）',
            Script: '6dylan6_jdm/jd_jinggeng_showInviteJoin.js',
            ListenEnv: ['jd_showInviteJoin_activityUrl'],
            SetEnv: {
                jd_showInviteJoin_activityUrl: 'jd_showInviteJoin_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '店铺抽奖-JK',
            Script: '6dylan6_jdm/jd_dpcj.py',
            ListenEnv: ['DPCJID'],
            SetEnv: {
                DPCJID: 'DPCJID',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'lzkj_interactsaas邀请好友入会',
            Script: 'shufflewzc_faker3_main/jd_lzkj_interactsaas_yqhyrh.js',
            ListenEnv: ['jd_lzkj_interactsaas_yqhyrh_activityId'],
            SetEnv: {
                jd_lzkj_interactsaas_yqhyrh_activityId: 'jd_lzkj_interactsaas_yqhyrh_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'cjhy签到有礼',
            Script: 'shufflewzc_faker3_main/jd_cjhy_signActivity.js',
            ListenEnv: ['jd_cjhy_signActivity_ids'],
            SetEnv: {
                jd_cjhy_signActivity_ids: 'jd_cjhy_signActivity_ids',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M无线游戏',
            Script: '6dylan6_jdm/m_jd_wx_game.js',
            ListenEnv: ['M_WX_GAME_URL'],
            SetEnv: {
                M_WX_GAME_URL: 'M_WX_GAME_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '京东抽奖机加购-KR',
            Script: '6dylan6_jdm/jd_lottery_cart.js',
            ListenEnv: ['JD_Lottery_cart'],
            SetEnv: {
                JD_Lottery_cart: 'JD_Lottery_cart',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '组队瓜分奖品（超级无线/超级会员）',
            Script: 'shufflewzc_faker3_main/jd_wxTeam.js',
            ListenEnv: ['jd_wxTeam_activityUrl'],
            SetEnv: {
                jd_wxTeam_activityUrl: 'jd_wxTeam_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M组队瓜分',
            Script: '6dylan6_jdm/m_jd_wx_team.js',
            ListenEnv: ['M_WX_TEAM_URL'],
            SetEnv: {
                M_WX_TEAM_URL: 'M_WX_TEAM_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M粉丝红包',
            Script: '6dylan6_jdm/m_jd_fans_redPackt.js',
            ListenEnv: ['M_FANS_RED_PACKET_URL'],
            SetEnv: {
                M_FANS_RED_PACKET_URL: 'M_FANS_RED_PACKET_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'cjhy每日抢',
            Script: 'shufflewzc_faker3_main/jd_cjhy_daily.js',
            ListenEnv: ['jd_cjhy_daily_ids'],
            SetEnv: {
                jd_cjhy_daily_ids: 'jd_cjhy_daily_ids',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: 'CJ每日抢好礼通用活动',
            Script: '6dylan6_jdm/jd_cjdaily.js',
            ListenEnv: ['jd_cjdaily_activityId'],
            SetEnv: {
                jd_cjdaily_activityId: 'jd_cjdaily_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: 'M集卡抽奖',
            Script: 'shufflewzc_faker3_main/m_jd_wx_collectCard.js',
            ListenEnv: ['M_WX_COLLECT_CARD_URL'],
            SetEnv: {
                M_WX_COLLECT_CARD_URL: 'M_WX_COLLECT_CARD_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'txzj抽奖',
            Script: 'shufflewzc_faker3_main/jd_txzj_lottery.js',
            ListenEnv: ['jd_txzj_lottery_id'],
            SetEnv: {
                jd_txzj_lottery_id: 'jd_txzj_lottery_id',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '知识超人',
            Script: '6dylan6_jdm/jd_wxKnowledgeActivity.js',
            ListenEnv: ['jd_wxKnowledgeActivity_activityUrl'],
            SetEnv: {
                jd_wxKnowledgeActivity_activityUrl: 'jd_wxKnowledgeActivity_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '知识超人',
            Script: '6dylan6_jdm/jd_wxKnowledgeActivity.js',
            ListenEnv: ['jd_wxKnowledgeActivity_activityUrl'],
            SetEnv: {
                jd_wxKnowledgeActivity_activityUrl: 'jd_wxKnowledgeActivity_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '邀请好友入会赢好礼-火箭版',
            Script: '6dylan6_jdm/jd_prodev.js',
            ListenEnv: ['prodevactCode'],
            SetEnv: {
                prodevactCode: 'prodevactCode',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'LZ盖楼有礼',
            Script: '6dylan6_jdm/jd_wxBuildActivity.js',
            ListenEnv: ['jd_wxBuildActivity_activityId'],
            SetEnv: {
                jd_wxBuildActivity_activityId: 'jd_wxBuildActivity_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M盖楼领奖',
            Script: '6dylan6_jdm/m_jd_wx_buildDraw.js',
            ListenEnv: ['M_WX_BUILD_DRAW_URL'],
            SetEnv: {
                M_WX_BUILD_DRAW_URL: 'M_WX_BUILD_DRAW_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '通用开卡-joinCommon系列',
            Script: 'shufflewzc_faker3_main/jd_joinCommon_opencard.py',
            ListenEnv: ['jd_joinCommonId'],
            SetEnv: {
                jd_joinCommonId: 'jd_joinCommonId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'LZ分享有礼',
            Script: '6dylan6_jdm/jd_share.js',
            ListenEnv: ['jd_fxyl_activityId'],
            SetEnv: {
                jd_fxyl_activityId: 'jd_fxyl_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'lzkj_interactsaas加购有礼',
            Script: 'shufflewzc_faker3_main/jd_lzkj_interactsaas_jgyl.js',
            ListenEnv: ['jd_lzkj_interactsaas_jgyl_activityId'],
            SetEnv: {
                jd_lzkj_interactsaas_jgyl_activityId: 'jd_lzkj_interactsaas_jgyl_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '通用开卡-shopLeague系列',
            Script: 'shufflewzc_faker3_main/jd_shopLeague_opencard.py',
            ListenEnv: ['jd_shopLeagueId'],
            SetEnv: {
                jd_shopLeagueId: 'jd_shopLeagueId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '加购有礼-JK',
            Script: 'shufflewzc_faker3_main/jd_wxCollectionActivity.py',
            ListenEnv: ['jd_wxCollectionActivityUrl'],
            SetEnv: {
                jd_wxCollectionActivityUrl: 'jd_wxCollectionActivityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '收藏大师-加购有礼',
            Script: '6dylan6_jdm/jd_txzj_cart_item.js',
            ListenEnv: ['jd_cart_item_activityUrl'],
            SetEnv: {
                jd_cart_item_activityUrl: 'jd_cart_item_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'cj组队瓜分',
            Script: 'shufflewzc_faker3_main/jd_cjhydz_wxTeam.js',
            ListenEnv: ['jd_cjhydz_wxTeam_Id'],
            SetEnv: {
                jd_cjhydz_wxTeam_Id: 'jd_cjhydz_wxTeam_Id',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: 'lzkj关注店铺有礼',
            Script: 'shufflewzc_faker3_main/jd_lzkj_wxShopFollowActivity.js',
            ListenEnv: ['jd_lzkj_wxShopFollowActivity_activityId'],
            SetEnv: {
                jd_lzkj_wxShopFollowActivity_activityId: 'jd_lzkj_wxShopFollowActivity_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '大转盘抽奖（京耕）',
            Script: '6dylan6_jdm/jd_jinggeng_showDrawOne.js',
            ListenEnv: ['jd_jinggeng_showDrawOne_activityUrl'],
            SetEnv: {
                jd_jinggeng_showDrawOne_activityUrl: 'jd_jinggeng_showDrawOne_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '收藏大师-关注商品',
            Script: '6dylan6_jdm/jd_txzj_collect_shop.js',
            ListenEnv: ['jd_collect_shop_activityUrl'],
            SetEnv: {
                jd_collect_shop_activityUrl: 'jd_collect_shop_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'lzkj_interactsaas签到',
            Script: 'shufflewzc_faker3_main/jd_lzkj_interactsaas_qrqd.js',
            ListenEnv: ['jd_lzkj_interactsaas_qrqd_Ids'],
            SetEnv: {
                jd_lzkj_interactsaas_qrqd_Ids: 'jd_lzkj_interactsaas_qrqd_Ids',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '店铺特效关注有礼-JK',
            Script: 'shufflewzc_faker3_main/jd_wxShopGift.py',
            ListenEnv: ['jd_wxShopGiftId'],
            SetEnv: {
                jd_wxShopGiftId: 'jd_wxShopGiftId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '收藏大师-幸运抽奖',
            Script: '6dylan6_jdm/jd_txzj_lottery.js',
            ListenEnv: ['jd_lottery_activityUrl'],
            SetEnv: {
                jd_lottery_activityUrl: 'jd_lottery_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '关注有礼（lzkj_loreal）',
            Script: '6dylan6_jdm/jd_lzkj_loreal_followShop.js',
            ListenEnv: ['jd_lzkj_loreal_followShop_url'],
            SetEnv: {
                jd_lzkj_loreal_followShop_url: 'jd_lzkj_loreal_followShop_url',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '关注有礼-加密',
            Script: 'KingRan_KR/jd_follow.js',
            ListenEnv: ['M_FOLLOW_SHOP_ARGV'],
            SetEnv: {
                M_FOLLOW_SHOP_ARGV: 'M_FOLLOW_SHOP_ARGV',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '购物车锦鲤通用活动',
            Script: '6dylan6_jdm/jd_wxCartKoi.js',
            ListenEnv: ['jd_wxCartKoi_activityId'],
            SetEnv: {
                jd_wxCartKoi_activityId: 'jd_wxCartKoi_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'lz组队瓜分-faker',
            Script: 'shufflewzc_faker3_main/jd_lzkjdz_wxTeam.js',
            ListenEnv: ['jd_lzkjdz_wxTeam_Id'],
            SetEnv: {
                jd_lzkjdz_wxTeam_Id: 'jd_lzkjdz_wxTeam_Id',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'LZ刮刮乐抽奖通用活动-加密',
            Script: '6dylan6_jdm/jd_drawCenter.js',
            ListenEnv: ['jd_drawCenter_activityId'],
            SetEnv: {
                jd_drawCenter_activityId: 'jd_drawCenter_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '店铺积分换豆',
            Script: '6dylan6_jdm/jd_point_exchange.js',
            ListenEnv: ['POINT_EXCHANGE_URL'],
            SetEnv: {
                POINT_EXCHANGE_URL: 'POINT_EXCHANGE_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '加购有礼通用-加密',
            Script: '6dylan6_jdm/jd_wxCollectionActivity.js',
            ListenEnv: ['jd_wxCollectionActivity_activityUrl'],
            SetEnv: {
                jd_wxCollectionActivity_activityUrl: 'jd_wxCollectionActivity_activityUrl',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M加购有礼',
            Script: '6dylan6_jdm/m_jd_wx_addCart.js',
            ListenEnv: ['M_WX_ADD_CART_URL'],
            SetEnv: {
                M_WX_ADD_CART_URL: 'M_WX_ADD_CART_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '6dy通用',
            Script: 'jd_wx_luckdraw.js',
            ListenEnv: ['M_WX_LUCK_DRAW_URL', 'jd_cjhy_activityId', 'LUCK_DRAW_URL', 'jd_lzkj_loreal_draw_url', 'jd_wxShopFollowActivity_activityUrl', 'jd_zdjr_activityId', 'M_WX_TEAM_URL', 'M_WX_CENTER_DRAW_URL', 'M_WX_FOLLOW_DRAW_URL', 'M_LUCK_DRAW_URL'],
            SetEnv: {
                M_WX_LUCK_DRAW_URL: 'M_WX_LUCK_DRAW_URL',
                jd_cjhy_activityId: 'jd_cjhy_activityId',
                LUCK_DRAW_URL: 'LUCK_DRAW_URL',
                jd_lzkj_loreal_draw_url: 'jd_lzkj_loreal_draw_url',
                jd_wxShopFollowActivity_activityUrl: 'jd_wxShopFollowActivity_activityUrl',
                jd_zdjr_activityId: 'jd_zdjr_activityId',
                M_WX_TEAM_URL: 'M_WX_TEAM_URL',
                M_WX_CENTER_DRAW_URL: 'M_WX_CENTER_DRAW_URL',
                M_WX_FOLLOW_DRAW_URL: 'M_WX_FOLLOW_DRAW_URL',
                M_LUCK_DRAW_URL: 'M_LUCK_DRAW_URL',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
    ],
    /* 监控列表 */
    ListenList: [
        {
            Name: '1',
            Id: '-1001744932665',
        },
        {
            Name: '2',
            Id: '-1001776658413',
        },
         {
            Name: '3',
            Id: '-1001733192479',
        },
        {
            Name: '4',
            Id: '-1001654299303',
        },
        {
            Name: '5',
            Id: '-1001740866345',
        },
        {
            Name: '6',
            Id: '-1001784219319',
        },
        {
            Name: '7',
            Id: '-1001572921323',
        },
        {
            Name: '8',
            Id: '-1001605209079',
        },
        {
            Name: '9',
            Id: '-1001659538110',
        },
        {
            Name: '10',
            Id: '-1001720740578',
        },
        {
            Name: '11',
            Id: '-1001263138437',
        },
        {
            Name: '12',
            Id: '-1001254006730',
        },
        {
            Name: '13',
            Id: '-1001841389846',
        },
        {
            Name: '14',
            Id: '-1001670294604',
        }
    ],
    /* 设置 管理员发送https的Url解析模式,  ''或者直接删除这一行为自动解析，spyjx:'j', 则发url链接时需要以j开头才会解析*/
    spyjx:'',
    //非静默触发消息多少秒撤回 0不撤回
    delMsgWaitTime: 10,
    //静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
    Taboo: true,
    TabooOriginalMsg: false /* 静默后推送的消息是否显示触发消息 */,
    //1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
    DisableAllLogs: false,
    //2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
    DisableErrLogs: false,
    //3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
    DisableRunLogs: false,
    //4 禁用控制台日志 改为true后,控制台不会显示任何消息
    DisableConsoleLog: false,
    //队列模式 1先进先出  2先进后出  其他值均视为 先进先出
    ListMode: 2,
    /* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
    runLogsInfo: {
        platform: 'tgBot', //发送平台
        toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
        Id: '-1001744932665', //个人id 或群id
    },
    /* 静默后监控结果输出位置  可填多个*/
    TabooLogsInfo: [
        // 	{
        // 	platform: "HumanTG",
        // 	toGroupOrUser: "groupId",   //通知类型,个人userId //群groupId
        // 	Id: "-1001744932665"
        // },
         {
             platform: 'tgBot', //发送平台
             toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
             Id: '-1001704263871', //个人id 或群id
         },
    ],
};


module.exports = {
    RspyList,
};
