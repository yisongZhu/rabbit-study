/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.26 : Database - rabbit-v2
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `device` */

DROP TABLE IF EXISTS `device`;

CREATE TABLE `device` (
  `id` varchar(100) NOT NULL COMMENT '设备id',
  `name` varchar(100) DEFAULT NULL COMMENT '设备名',
  `agent_ip` varchar(50) DEFAULT NULL COMMENT '设备所在的agent的ip',
  `agent_port` int(11) DEFAULT NULL COMMENT '设备所在的agent的端口',
  `system_version` varchar(50) DEFAULT NULL COMMENT '设备系统版本',
  `cpu_info` varchar(50) DEFAULT NULL COMMENT 'cpu信息',
  `mem_size` varchar(50) DEFAULT NULL COMMENT '内存大小：GB',
  `screen_width` int(11) DEFAULT NULL COMMENT '屏幕宽（像素）',
  `screen_height` int(11) DEFAULT NULL COMMENT '屏幕高（像素）',
  `img_url` varchar(255) DEFAULT NULL COMMENT '图片地址，用于在前端展示',
  `platform` int(4) DEFAULT NULL COMMENT '平台：1.android  2.ios',
  `status` int(4) DEFAULT NULL COMMENT '设备状态：0.离线 1.使用中 2.空闲',
  `last_online_time` datetime DEFAULT NULL COMMENT '最近一次在线时间',
  `last_offline_time` datetime DEFAULT NULL COMMENT '最近一次离线时间',
  `username` varchar(100) DEFAULT NULL COMMENT '使用人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='设备表';

/*Data for the table `device` */

insert  into `device`(`id`,`name`,`agent_ip`,`agent_port`,`system_version`,`cpu_info`,`mem_size`,`screen_width`,`screen_height`,`img_url`,`platform`,`status`,`last_online_time`,`last_offline_time`,`username`,`create_time`) values ('127.0.0.1:62001','[Android] AOSP on Shama','127.0.0.1',8879,'5.1','获取cpu信息失败','2.0 GB',900,1600,NULL,1,0,'2020-01-19 08:42:04','2020-01-19 08:44:30','admin','2019-11-01 08:00:55'),('192.168.112.101:5555','[Android] Samsung Galaxy S9','127.0.0.1',10004,'9','获取cpu信息失败','4.0 GB',1440,2960,'http://127.0.0.1:8890/8fa6dbabd4ba408da39ed7ce1113b8d8.jpg',1,0,'2019-10-11 08:56:33','2019-10-18 10:11:30','test','2019-10-10 17:20:50'),('192.168.112.102:5555','[Android] Google Pixel 2','127.0.0.1',8879,'9','获取cpu信息失败','4.0 GB',1080,1920,NULL,1,0,'2020-01-18 20:45:02','2020-01-18 20:46:09','admin','2019-10-30 16:16:32');

/*Table structure for table `sys_code_store` */

DROP TABLE IF EXISTS `sys_code_store`;

CREATE TABLE `sys_code_store` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) NOT NULL DEFAULT '',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `sys_code_store` */

insert  into `sys_code_store`(`id`,`code`,`create_time`,`update_time`) values (2,'UI-PLAN-TEST-2019072500005','2019-06-28 17:47:22','2019-07-25 16:52:00');

/*Table structure for table `sys_dict` */

DROP TABLE IF EXISTS `sys_dict`;

CREATE TABLE `sys_dict` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(64) NOT NULL COMMENT '字典组code',
  `name` varchar(64) NOT NULL COMMENT '字典组name',
  `is_enable` int(1) DEFAULT '1',
  `create_by` varchar(64) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_by` varchar(64) DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `sys_dict` */

insert  into `sys_dict`(`id`,`key`,`name`,`is_enable`,`create_by`,`create_time`,`update_by`,`update_time`) values (1,'sex','性别',1,NULL,NULL,'admin','2019-05-27 14:56:39'),(2,'browserType','浏览器类型',NULL,'admin','2019-03-15 09:25:29','admin','2019-06-17 11:20:57'),(5,'uiAction','常用操作',NULL,'admin','2019-03-07 16:03:15','admin','2019-06-17 11:26:20'),(7,'uiAction1','验证操作',NULL,'admin','2019-06-17 11:18:06','admin','2019-06-17 11:18:06'),(8,'uiAction2','智能等待操作',NULL,'admin','2019-06-17 11:18:50','admin','2019-06-17 11:19:55'),(9,'uiAction3','浏览器操作',NULL,'admin','2019-06-17 11:25:31','admin','2019-06-17 11:25:31'),(10,'uiAction4','缓存变量操作',NULL,'admin','2019-06-17 11:25:56','admin','2019-06-17 11:25:56'),(11,'uiAction5','滚动条操作',NULL,'admin','2019-06-17 11:27:40','admin','2019-06-17 11:28:10'),(12,'uiAction6','文件操作',1,'admin','2019-06-17 11:28:29','admin','2019-06-17 13:40:06'),(13,'uiAction7','对Alert处理',1,'admin','2019-06-17 11:28:45','admin','2019-06-17 13:40:06'),(14,'uiAction8','特殊输入操作',1,'admin','2019-06-17 11:28:59','admin','2019-06-17 13:40:07'),(15,'uiAction9','特殊点击操作',1,'admin','2019-06-17 11:29:16','admin','2019-06-17 13:40:07'),(17,'uiAction11','数据库操作',1,'admin','2019-06-17 11:30:17','admin','2019-06-17 13:40:09'),(18,'uiAction12','业务用例操作',1,'admin','2019-12-01 09:30:51','admin','2019-12-01 09:32:41'),(19,'uiAction13','自定义',1,'admin','2019-06-17 11:30:28','admin','2019-12-01 09:32:48');

/*Table structure for table `sys_dict_value` */

DROP TABLE IF EXISTS `sys_dict_value`;

CREATE TABLE `sys_dict_value` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `dict_id` bigint(11) NOT NULL,
  `key` varchar(64) DEFAULT NULL COMMENT '字典code',
  `name` varchar(64) DEFAULT NULL COMMENT '字典name',
  `remark` text COMMENT '备注',
  `remark2` text COMMENT '备注2',
  `is_enable` int(2) DEFAULT NULL COMMENT '状态 1启用 0失效',
  `create_by` varchar(64) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_by` varchar(64) DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

/*Data for the table `sys_dict_value` */

insert  into `sys_dict_value`(`id`,`dict_id`,`key`,`name`,`remark`,`remark2`,`is_enable`,`create_by`,`create_time`,`update_by`,`update_time`) values (1,1,'1','男','备注1','描述2',0,'admin','2019-03-06 22:50:51','admin','2019-05-04 17:58:30'),(2,1,'0','女','女的备注',NULL,NULL,'admin','2019-03-06 23:02:43','admin','2019-03-07 15:39:06'),(4,5,'openURL','打开浏览器','描述：打开网页\n元素：必填\n操作数据：需要打开的网址',NULL,NULL,'admin','2019-03-07 18:58:22','admin','2019-06-11 14:03:17'),(5,5,'click','点击元素','描述：点击元素\n元素：必填\n操作数据：无',NULL,NULL,'admin','2019-03-07 18:58:41','admin','2019-06-16 17:13:33'),(6,5,'input','输入值','描述：向input框输入值\n元素：无\n操作数据：需要向元素输入的值',NULL,NULL,'admin','2019-03-07 18:59:16','admin','2019-05-28 21:12:48'),(7,2,'IE','IE',NULL,NULL,NULL,'admin','2019-03-15 09:26:11','admin','2019-06-17 11:40:52'),(8,2,'IE9','IE9',NULL,NULL,NULL,'admin','2019-03-15 09:26:29','admin','2019-06-17 11:40:52'),(9,2,'Firefox_v61','Firefox_v61','貌似最新版的都可以用',NULL,NULL,'admin','2019-03-15 09:26:39','admin','2019-06-17 11:40:53'),(13,2,'Chrome_v62-64','Chrome_v62-64',NULL,NULL,NULL,'admin','2019-03-15 09:27:35','admin','2019-06-17 11:40:56'),(14,2,'Chrome_v65-67','Chrome_v65-67',NULL,NULL,NULL,'admin','2019-03-15 09:27:44','admin','2019-06-17 11:40:57'),(15,2,'Chrome_v68-70','Chrome_v68-70',NULL,NULL,NULL,'admin','2019-03-15 09:27:57','admin','2019-06-17 11:40:59'),(22,5,'sleep','固定等待','描述：固定等待时间\n元素：无\n操作数据：等待的毫秒值',NULL,NULL,'admin','2019-06-18 23:19:52','admin','2019-06-18 23:19:52'),(23,18,'excBusiness','调用业务','描述：调用业务\n元素：选择业务\n操作数据：业务用例的业务参数，如果有多个用“;;”号隔开',NULL,NULL,'admin','2019-12-01 21:35:29','admin','2019-12-01 21:35:29'),(24,8,'waitForElementDisappear','等待元素是否在设定的时间内消失','描述：等待元素是否在设定的时间内消失\n元素：必填\n操作数据：等待的时间（秒）,如果不填，默认60S',NULL,NULL,'admin','2019-12-02 10:01:22','admin','2019-12-02 10:01:22'),(25,8,'waitForElementAppear','等待元素是否在设定的时间内出现','描述：等待元素是否在设定的时间内可见\n元素：必填\n操作数据：等待的时间（秒）,如果不填，默认60S',NULL,NULL,'admin','2019-12-02 10:12:02','admin','2019-12-02 10:12:02'),(26,10,'buffer','缓存元素文本','描述：把元素的文本值存入用例变量\n元素：必填\n操作数据：变量名，用来保存元素的文本值',NULL,NULL,'admin','2019-12-02 13:53:17','admin','2019-12-02 13:53:17'),(27,5,'switchToFrame','切换到iFrame','描述：切换到iFrame\n元素：必填,需要切换的iframe\n操作数据：无',NULL,NULL,'admin','2019-12-02 17:19:54','admin','2019-12-02 17:19:54'),(28,5,'selectOption','普通下拉操作','描述：select标签操作\n元素：必填，select元素标签\n操作数据：下拉的文本，或者下拉的index',NULL,NULL,'admin','2019-12-02 17:25:17','admin','2019-12-02 17:25:17'),(29,5,'switchOutOfFrame','跳出iFrame','描述：跳出iFrame\n元素：无\n操作数据：无',NULL,NULL,'admin','2019-12-02 17:28:14','admin','2019-12-02 17:28:14'),(30,5,'keyboardOption','模拟键盘操作','描述：模拟键盘操作\n元素：无\n操作数据：可选值\n---Enter表示：手动按下回车键\n---Delete表示：手动按下删除键\n---Backspace表示：手动按下空格键\n---Tab表示：手动按下Tab键\n---其他（Shift；Ctrl；Alt；Esc；F2 。。。）\n---Copy表示：手动按下Ctrl + C\n---Paste表示：手动按下Ctrl + V\n---SelectAll表示：手动按下Ctrl + A',NULL,NULL,'admin','2019-12-02 17:46:24','admin','2019-12-02 17:46:24'),(31,13,'acceptAlert','确认alert','描述：确认alert\n元素：无\n操作数据：无',NULL,NULL,'admin','2019-12-02 18:10:47','admin','2019-12-02 18:10:47'),(32,13,'cancelAlert','取消alert','描述：取消alert\n元素：无\n操作数据：无',NULL,NULL,'admin','2019-12-02 18:11:10','admin','2019-12-02 18:11:10'),(33,5,'excJs','执行JS代码','描述：执行JS代码\n元素：无\n操作数据：需要执行的JS代码',NULL,NULL,'admin','2019-12-02 18:25:21','admin','2019-12-02 18:25:21'),(34,7,'verifyTextEqual','验证元素文本是否相同','描述：验证元素文本是否与期望相同\n元素：必填\n操作数据：与元素文本对比的数据',NULL,NULL,'admin','2019-12-02 20:16:25','admin','2019-12-02 20:16:25'),(35,7,'verifyTextNotEqual','验证元素文本是否不同','描述：验证元素文本是否与期望不相同\n元素：必填\n操作数据：与元素文本对比的数据',NULL,NULL,'admin','2019-12-02 20:18:59','admin','2019-12-02 20:18:59'),(36,7,'verifyIsEnabled','验证元素是否可用','描述：验证元素是否可用\n元素：必填\n操作数据：期望元素是否可见；可选值（true;false）',NULL,NULL,'admin','2019-12-02 20:25:37','admin','2019-12-02 20:25:37'),(37,7,'verifyCompareEqual','验证两个值是否相同','描述：验证两个值是否相同\n元素：无\n操作数据：格式（值1;;值2）',NULL,NULL,'admin','2019-12-02 20:32:56','admin','2019-12-02 20:32:56'),(38,7,'verifyElementAttribute','验证元素属性','描述：验证元素属性是否和预期相同\n元素：必填\n操作数据：想要验证的元素的 属性 和 属性值\n---格式： 属性;;属性值\n---例子：id;;su',NULL,NULL,'admin','2019-12-02 20:43:00','admin','2019-12-02 20:43:00'),(39,9,'openNewTabToURL','打开新的窗口','描述：打开新的浏览器窗口，并跳转到url\n元素：无\n操作数据：需要跳转的url',NULL,NULL,'admin','2019-12-02 20:57:12','admin','2019-12-02 20:57:12'),(40,9,'switchToWindowByURL','根据url切换窗口','描述：切换到指定url的浏览器窗口\n元素：无\n操作数据：切换目的窗口的url',NULL,NULL,'admin','2019-12-02 20:59:37','admin','2019-12-02 20:59:37'),(41,9,'switchToWindowByTitle','根据Title切换窗口','描述：切换到指定Title的浏览器窗口\n元素：无\n操作数据：切换目的窗口的Title',NULL,NULL,'admin','2019-12-02 21:02:17','admin','2019-12-02 21:02:17'),(42,9,'switchToWindowByNO','切换第N个窗口','描述：切换第N个窗口\n元素：无\n操作数据：你所需要切换到第N个窗口\n---例子：1 （切换到第1个窗口）',NULL,NULL,'admin','2019-12-02 21:19:54','admin','2019-12-02 21:19:54'),(43,9,'refreshWindow','刷新浏览器','描述：刷新浏览器\n元素：无\n操作数据：无',NULL,NULL,'admin','2019-12-02 21:24:54','admin','2019-12-02 21:24:54'),(44,9,'closeCurrentWindow','关闭当前窗口','描述：关闭当前窗口\n元素：无\n操作数据：无',NULL,NULL,'admin','2019-12-02 21:28:00','admin','2019-12-02 21:28:00'),(45,5,'selectOptionByValue','通过value选择下拉','描述：select标签操作\n元素：必填，select元素标签\n操作数据：下拉元素的value，或者下拉的index',NULL,NULL,'admin','2019-12-02 21:54:06','admin','2019-12-02 21:54:06'),(46,18,'excBusinessByExample','是否调用业务','描述：根据条件调用业务\n元素：选择业务\n操作数据：条件;;业务用例的业务参数，如果有多个用“;;”号隔开\n--例子：${orderFlag}==1;;admin;;admin\n--解释： 变量 orderFlag的值为1时 执行这个 业务流\n\n--例子：${orderFlag}!=1;;admin;;admin\n--解释： 变量 orderFlag的值不等于1时，执行这个 业务流',NULL,NULL,'admin','2019-12-03 09:08:37','admin','2019-12-03 09:08:37'),(47,17,'runSQL','执行Sql','描述：执行sql\n元素：执行sql的数据库\n操作数据：需要执行的sql',NULL,NULL,'admin','2019-12-03 15:26:28','admin','2019-12-03 15:26:28'),(48,17,'runQuerySQL','执行查询Sql','描述：执行查询Sql，如果查询的有数据，会把查询出\n的数据的第一行 放入用例变量\n元素：执行sql的数据库\n操作数据：需要执行的sql',NULL,NULL,'admin','2019-12-03 15:58:12','admin','2019-12-03 15:58:12'),(49,17,'runUpdateSQL','执行UpdateSQL','描述：UpdateSQL\n元素：执行sql的数据库\n操作数据：需要执行的sql',NULL,NULL,'admin','2019-12-03 15:58:39','admin','2019-12-03 15:58:39'),(50,10,'bufferString','缓存字符串','描述：把字符串存入用例变量\n元素：必填\n操作数据：变量名；；需要存入的字符串\n例子：url;;http://www.baidu.com',NULL,NULL,'admin','2019-12-06 09:48:32','admin','2019-12-06 09:48:32'),(51,19,'excErr','你执行我就报错','描述：执行我就报错\n元素：无\n操作数据：无','import org.openqa.selenium.WebDriver;\n\nimport java.util.Map;\n\npublic class TestStingToCode {\n    /**\n     * @param driver   浏览器驱动\n     * @param byString 定位方式  byid和byvalue用英文字符“;;”隔开\n     * @param data     操作的数据\n     * @param vars     内置用例变量\n     * @return 返回 Result.fail(String msg),Result.success(String msg),断言此关键字是否通过\n     */\n    public static Object run(WebDriver driver, String byString, String data, Map vars) throws Exception {\n        try {\n            driver.get(\"https://www.baidu.com/\");\n            //编写执行内容，并进行断言\n            return Result.success(\"你执行我，我报错了！\");\n        } catch (Exception e) {\n            //失败的时候断言\n            return Result.fail(\"关闭失败！\");\n        }\n    }\n}\n',NULL,NULL,NULL,'admin',NULL),(52,13,'getAlertTextEques','比较alert的值','描述：比较alert的值，并关闭alert\n元素：无\n操作数据：alert的预期值',NULL,NULL,'admin','2019-12-13 17:50:47','admin','2019-12-13 17:50:47'),(53,12,'sendUploadFile','上传文件','描述：上传文件，当input标签的type是等于file的时候可使用\n元素：必填，定位到input标签\n操作数据：当前用例的文件名称',NULL,NULL,'admin','2019-12-25 11:39:35','admin','2019-12-25 11:39:35'),(54,12,'selectUploadFile','选择文件上传','	\n描述：上传文件，当input标签的type是不等于file的时候可使用\n元素：必填，定位到input标签\n操作数据：当前用例的文件名称',NULL,NULL,'admin','2019-12-25 11:40:05','admin','2019-12-25 11:40:05'),(55,10,'bufferInputValue','缓存Input文本','描述：把input元素的文本值存入用例变量\n元素：必填\n操作数据：变量名，用来保存元素的文本值',NULL,NULL,'admin','2020-01-06 12:43:22','admin','2020-01-06 12:43:22'),(56,14,'inputJsValue','给input框赋值','描述：使用js给input框赋值\n元素：需要赋值的input框，定位方式必需是cssselector\n操作数据：需要赋值的数据',NULL,NULL,'admin','2020-01-15 20:21:46','admin','2020-01-15 20:21:46');

/*Table structure for table `sys_job` */

DROP TABLE IF EXISTS `sys_job`;

CREATE TABLE `sys_job` (
  `job_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务ID',
  `job_name` varchar(64) NOT NULL DEFAULT '' COMMENT '任务名称',
  `job_group` varchar(64) NOT NULL DEFAULT '' COMMENT '任务组名',
  `project_id` bigint(11) DEFAULT '0',
  `method_name` varchar(500) DEFAULT '' COMMENT '任务方法',
  `method_params` text COMMENT '方法参数',
  `cron_expression` varchar(255) DEFAULT '' COMMENT 'cron执行表达式',
  `misfire_policy` varchar(20) DEFAULT '3' COMMENT '计划执行错误策略（1立即执行 2执行一次 3放弃执行）',
  `status` char(1) DEFAULT '0' COMMENT '状态（0正常 1暂停）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `job_type` int(11) DEFAULT '0' COMMENT '任务类型（任务类型0系统 1 UI自动化 2 APP自动化 3接口自动化 4 UI自动化新）',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT '' COMMENT '备注信息',
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8 COMMENT='定时任务调度表';

/*Data for the table `sys_job` */

insert  into `sys_job`(`job_id`,`job_name`,`job_group`,`project_id`,`method_name`,`method_params`,`cron_expression`,`misfire_policy`,`status`,`create_by`,`create_time`,`job_type`,`update_by`,`update_time`,`remark`) values (1,'ryTask','系统默认（无参）-测试客户端',0,'ryNoParams','','0 15 10 ? * MON','0','1','admin','2018-03-16 11:33:00',0,'admin','2019-12-26 13:45:39',''),(2,'ryTask','系统默认（有参）',0,'ryParams','ry','0 15 10 ? * MON','0','1','admin','2018-03-16 11:33:00',0,'admin','2019-12-26 13:45:51',''),(100,'ryTask','测试一下',0,'ryParams','TEST','0 15 10 ? * MON','0','1','admin','2019-02-22 11:16:46',0,'admin','2019-02-28 09:04:26','测试备注1'),(121,'autoTestTask','测试一下本地客户端百度',1,'uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','0 15 10 ? * MON','0','1','admin','2019-06-10 10:27:46',1,'admin','2019-11-22 16:05:29',''),(123,'autoTestTask',' test2',1,'uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":7,\"isSendEmail\":0,\"receivers\":\"\"}','0 15 10 ? * MON','0','1','admin','2019-06-10 10:41:47',1,'admin','2019-11-21 09:28:59','阿道夫'),(127,'autoTestNewTask','第一个新任务',1,'uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','0 15 10 ? * MON','0','1','admin','2019-11-23 19:18:47',4,'admin','2020-01-23 17:37:39','备注'),(128,'autoTestNewTask','调试任务',1,'uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','0 15 10 ? * MON','0','1','admin','2019-12-03 15:43:25',4,'admin','2019-12-13 14:07:31','');

/*Table structure for table `sys_job_log` */

DROP TABLE IF EXISTS `sys_job_log`;

CREATE TABLE `sys_job_log` (
  `job_log_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务日志ID',
  `job_id` int(11) DEFAULT NULL COMMENT '任务ID',
  `job_name` varchar(64) NOT NULL COMMENT '任务名称',
  `job_group` varchar(64) NOT NULL COMMENT '任务组名',
  `method_name` varchar(500) DEFAULT NULL COMMENT '任务方法',
  `method_params` text COMMENT '方法参数',
  `job_message` varchar(500) DEFAULT NULL COMMENT '日志信息',
  `status` char(1) DEFAULT '0' COMMENT '执行状态（0正常 1失败）',
  `exception_info` varchar(2000) DEFAULT '' COMMENT '异常信息',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`job_log_id`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8 COMMENT='定时任务调度日志表';

/*Data for the table `sys_job_log` */

insert  into `sys_job_log`(`job_log_id`,`job_id`,`job_name`,`job_group`,`method_name`,`method_params`,`job_message`,`status`,`exception_info`,`create_time`) values (1,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-24 17:45:31'),(2,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:00:24'),(3,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:02:16'),(4,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:08:17'),(5,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:09:35'),(6,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:09:41'),(7,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:52:51'),(8,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:53:00'),(9,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:55:53'),(10,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 14:55:58'),(11,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:32:11'),(12,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:33:33'),(13,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:33:35'),(14,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:33:39'),(15,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:38:44'),(16,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:38:50'),(17,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:41:59'),(18,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:42:03'),(19,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:42:18'),(20,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:43:01'),(21,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:43:19'),(22,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:43:28'),(23,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:43:41'),(24,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:43:44'),(25,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:44:27'),(26,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:45:55'),(27,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:45:58'),(28,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:00'),(29,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:02'),(30,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:18'),(31,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:22'),(32,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:39'),(33,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:42'),(34,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:47'),(35,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:51'),(36,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:55'),(37,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:46:59'),(38,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:47:01'),(39,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:47:04'),(40,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:48:38'),(41,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:48:46'),(42,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 15:49:04'),(43,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 16:00:33'),(44,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-25 16:00:36'),(45,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-26 08:00:37'),(46,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-26 08:02:19'),(47,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-26 08:02:22'),(48,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：10秒','0','','2019-11-26 11:41:29'),(49,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：7秒','0','','2019-11-26 11:42:12'),(50,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：8秒','0','','2019-11-26 11:45:23'),(51,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-26 13:43:08'),(52,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-11-26 13:44:02'),(53,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：2秒','0','','2019-11-26 17:31:34'),(54,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：15秒','0','','2019-11-26 17:33:59'),(55,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：15秒','0','','2019-11-26 18:09:22'),(56,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：15秒','0','','2019-11-26 20:13:54'),(57,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：12秒','0','','2019-11-26 20:41:48'),(58,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：13秒','0','','2019-11-26 20:47:51'),(59,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：19秒','0','','2019-11-26 21:31:47'),(60,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：34秒','0','','2019-11-26 21:36:13'),(61,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：33秒','0','','2019-11-26 21:38:26'),(62,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：52秒','0','','2019-11-26 22:02:36'),(63,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：24秒','0','','2019-11-27 08:01:13'),(64,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：21秒','0','','2019-11-27 08:12:28'),(65,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Firefox_v61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：21秒','0','','2019-11-27 08:13:04'),(66,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：14秒','0','','2019-11-27 08:13:40'),(67,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：14秒','0','','2019-11-27 08:15:13'),(68,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：16秒','0','','2019-11-27 08:47:23'),(69,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：16秒','0','','2019-11-27 08:48:38'),(70,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：16秒','0','','2019-11-27 08:57:26'),(71,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：15秒','0','','2019-11-27 10:38:49'),(72,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：16秒','0','','2019-11-27 10:40:57'),(73,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：16秒','0','','2019-11-27 10:44:28'),(74,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：9秒','0','','2019-11-27 10:45:36'),(75,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：16秒','0','','2019-11-27 10:49:53'),(76,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：9秒','0','','2019-11-27 10:52:59'),(77,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：7秒','0','','2019-11-27 10:53:32'),(78,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：8秒','0','','2019-11-27 10:54:15'),(79,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：9秒','0','','2019-11-27 10:58:38'),(80,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：16秒','0','','2019-11-27 11:03:40'),(81,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：9秒','0','','2019-11-27 11:06:01'),(82,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：7秒','0','','2019-11-27 11:08:57'),(83,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：13秒','0','','2019-11-27 11:09:56'),(84,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v59-61\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：9秒','0','','2019-11-27 11:10:36'),(85,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：11秒','0','','2019-11-27 11:26:05'),(86,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：11秒','0','','2019-11-27 11:26:18'),(87,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：10秒','0','','2019-11-27 11:26:20'),(88,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：22秒','0','','2019-11-27 11:40:26'),(89,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：21秒','0','','2019-11-27 11:41:22'),(90,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：11秒','0','','2019-11-27 11:54:28'),(91,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：12秒','0','','2019-11-27 15:40:39'),(92,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：23秒','0','','2019-11-27 15:41:19'),(93,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：24秒','0','','2019-11-29 21:47:56'),(94,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：22秒','0','','2019-11-29 22:11:33'),(95,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：21秒','0','','2019-11-30 08:53:34'),(96,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：25秒','0','','2019-11-30 18:45:11'),(97,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：22秒','0','','2019-11-30 18:49:39'),(98,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：23秒','0','','2019-11-30 22:02:36'),(99,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：28秒','0','','2019-11-30 22:37:48'),(100,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：26秒','0','','2019-11-30 22:50:53'),(101,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：25秒','0','','2019-11-30 22:56:47'),(102,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：25秒','0','','2019-11-30 22:59:06'),(103,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：27秒','0','','2019-12-01 08:24:27'),(104,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2019-12-01 08:43:39'),(105,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：28秒','0','','2019-12-01 08:46:17'),(106,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：28秒','0','','2019-12-01 08:57:11'),(107,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：9秒','0','','2019-12-01 09:05:53'),(108,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：28秒','0','','2019-12-01 09:09:14'),(109,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：27秒','0','','2019-12-01 09:25:08'),(110,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：29秒','0','','2019-12-01 17:44:19'),(111,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：27秒','0','','2019-12-01 21:17:24'),(112,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：27秒','0','','2019-12-01 23:13:24'),(113,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：28秒','0','','2019-12-01 23:16:13'),(114,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：28秒','0','','2019-12-01 23:17:57'),(115,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：7秒','0','','2019-12-01 23:37:27'),(116,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：7秒','0','','2019-12-01 23:44:21'),(117,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：28秒','0','','2019-12-01 23:53:36'),(118,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：33秒','0','','2019-12-01 23:54:47'),(119,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：36秒','0','','2019-12-01 23:59:53'),(120,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：23秒','0','','2019-12-02 08:17:41'),(121,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：22秒','0','','2019-12-02 08:54:41'),(122,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：29秒','0','','2019-12-02 08:56:27'),(123,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：32秒','0','','2019-12-02 15:38:51'),(124,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：31秒','0','','2019-12-02 15:47:36'),(125,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：30秒','0','','2019-12-02 15:51:07'),(126,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：27秒','0','','2019-12-02 15:54:26'),(127,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：30秒','0','','2019-12-02 15:57:47'),(128,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：31秒','0','','2019-12-02 21:57:10'),(129,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：33秒','0','','2019-12-03 15:44:14'),(130,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：6秒','0','','2019-12-03 15:44:53'),(131,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：8秒','0','','2019-12-03 15:49:35'),(132,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：8秒','0','','2019-12-03 16:10:12'),(133,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：8秒','0','','2019-12-03 16:13:24'),(134,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：2秒','0','','2019-12-10 20:31:36'),(135,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"237371257@qq.com\"}','autoTestNewTask 总共耗时：38秒','0','','2019-12-10 21:58:53'),(136,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"237371257@qq.com\"}','autoTestNewTask 总共耗时：18秒','0','','2019-12-10 22:15:08'),(137,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"237371257@qq.com\"}','autoTestNewTask 总共耗时：80秒','0','','2019-12-10 22:18:43'),(138,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"237371257@qq.com\"}','autoTestNewTask 总共耗时：36秒','0','','2019-12-10 22:21:51'),(139,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"237371257@qq.com\"}','autoTestNewTask 总共耗时：35秒','0','','2019-12-10 22:34:06'),(140,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"237371257@qq.com\"}','autoTestNewTask 总共耗时：49秒','0','','2019-12-10 22:47:11'),(141,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：52秒','0','','2019-12-13 14:08:27'),(142,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：2秒','0','','2019-12-18 14:37:52'),(143,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：49秒','0','','2019-12-18 14:39:47'),(144,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"yunlin.luo@yidatec.com\"}','autoTestNewTask 总共耗时：18秒','0','','2019-12-18 17:47:58'),(145,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"yunlin.luo@yidatec.com\"}','autoTestNewTask 总共耗时：15秒','0','','2019-12-18 18:14:10'),(146,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"yunlin.luo@yidatec.com\"}','autoTestNewTask 总共耗时：13秒','0','','2019-12-18 18:33:19'),(147,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"yunlin.luo@yidatec.com\"}','autoTestNewTask 总共耗时：10秒','0','','2019-12-18 18:57:18'),(148,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"yunlin.luo@yidatec.com\"}','autoTestNewTask 总共耗时：13秒','0','','2019-12-18 18:58:07'),(149,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：11秒','0','','2019-12-18 20:35:41'),(150,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：14秒','0','','2019-12-19 15:40:10'),(151,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：2秒','0','','2019-12-19 15:47:54'),(152,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：11秒','0','','2019-12-19 15:48:37'),(153,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：14秒','0','','2019-12-19 16:49:06'),(154,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 16:32:54'),(155,1,'ryTask','系统默认（无参）-测试客户端','ryNoParams',NULL,'ryTask 总共耗时：19秒','0','','2020-01-07 16:39:03'),(156,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 17:36:03'),(157,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 19:24:57'),(158,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 20:46:54'),(159,121,'autoTestTask','测试一下本地客户端百度','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestTask 总共耗时：0秒','0','','2020-01-07 20:52:01'),(160,121,'autoTestTask','测试一下本地客户端百度','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestTask 总共耗时：0秒','0','','2020-01-07 20:52:11'),(161,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 21:35:48'),(162,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 21:36:09'),(163,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 21:39:15'),(164,128,'autoTestNewTask','调试任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 21:39:23'),(165,121,'autoTestTask','测试一下本地客户端百度','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":0,\"receivers\":\"\"}','autoTestTask 总共耗时：0秒','0','','2020-01-07 22:53:16'),(166,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：0秒','0','','2020-01-07 23:31:51'),(167,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":18,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：2秒','0','','2020-01-12 22:24:50'),(168,127,'autoTestNewTask','第一个新任务','uiTest','{\"browserType\":\"Chrome_v66-67\",\"clientId\":14,\"isSendEmail\":1,\"receivers\":\"\"}','autoTestNewTask 总共耗时：11秒','0','','2020-01-12 22:25:12');

/*Table structure for table `sys_logs` */

DROP TABLE IF EXISTS `sys_logs`;

CREATE TABLE `sys_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `module` varchar(50) DEFAULT NULL COMMENT '模块名',
  `flag` tinyint(4) NOT NULL DEFAULT '1' COMMENT '成功失败',
  `remark` text COMMENT '备注',
  `createTime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `createTime` (`createTime`)
) ENGINE=InnoDB AUTO_INCREMENT=475 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_logs` */

insert  into `sys_logs`(`id`,`userId`,`module`,`flag`,`remark`,`createTime`) values (1,1,'登陆',1,NULL,'2019-08-07 20:42:34'),(2,1,'退出',1,NULL,'2019-08-07 20:56:16'),(3,1,'登陆',1,NULL,'2019-08-07 20:56:17'),(4,1,'退出',1,NULL,'2019-08-07 20:58:11'),(5,1,'登陆',1,NULL,'2019-08-07 20:58:12'),(6,1,'退出',1,NULL,'2019-08-07 21:02:29'),(7,1,'登陆',1,NULL,'2019-08-07 21:02:31'),(8,1,'登陆',1,NULL,'2019-08-08 08:49:59'),(9,1,'登陆',1,NULL,'2019-08-09 15:43:42'),(10,1,'登陆',1,NULL,'2019-08-14 10:21:13'),(11,1,'登陆',1,NULL,'2019-08-15 10:59:19'),(12,1,'登陆',1,NULL,'2019-08-15 18:36:54'),(13,1,'登陆',1,NULL,'2019-08-17 08:50:52'),(14,1,'登陆',1,NULL,'2019-08-17 14:36:21'),(15,1,'登陆',1,NULL,'2019-08-18 10:31:32'),(16,1,'登陆',1,NULL,'2019-08-18 21:20:40'),(17,1,'登陆',1,NULL,'2019-08-19 08:33:37'),(18,1,'登陆',1,NULL,'2019-08-19 09:02:49'),(19,1,'登陆',1,NULL,'2019-08-19 17:07:52'),(20,1,'登陆',1,NULL,'2019-08-20 10:03:27'),(21,1,'登陆',1,NULL,'2019-08-20 16:58:34'),(22,1,'登陆',1,NULL,'2019-08-21 07:50:18'),(23,1,'登陆',1,NULL,'2019-08-21 13:58:54'),(24,1,'登陆',1,NULL,'2019-08-21 20:24:02'),(25,1,'登陆',1,NULL,'2019-08-22 08:49:30'),(26,1,'登陆',1,NULL,'2019-08-22 15:57:51'),(27,1,'登陆',1,NULL,'2019-08-23 08:36:54'),(28,1,'退出',1,NULL,'2019-08-23 09:52:36'),(29,1,'登陆',1,NULL,'2019-08-23 09:52:37'),(30,1,'退出',1,NULL,'2019-08-23 09:53:07'),(31,1,'登陆',1,NULL,'2019-08-23 09:53:08'),(32,1,'退出',1,NULL,'2019-08-23 10:21:36'),(33,1,'登陆',1,NULL,'2019-08-23 10:21:37'),(34,1,'退出',1,NULL,'2019-08-23 10:21:59'),(35,1,'登陆',1,NULL,'2019-08-23 10:22:01'),(36,1,'退出',1,NULL,'2019-08-23 10:26:06'),(37,1,'登陆',1,NULL,'2019-08-23 10:26:10'),(38,1,'退出',1,NULL,'2019-08-23 10:30:49'),(39,1,'登陆',1,NULL,'2019-08-23 10:30:50'),(40,1,'退出',1,NULL,'2019-08-23 16:18:56'),(41,1,'登陆',1,NULL,'2019-08-23 16:19:00'),(42,1,'登陆',1,NULL,'2019-08-23 16:27:14'),(43,1,'登陆',1,NULL,'2019-08-24 15:59:28'),(44,1,'登陆',1,NULL,'2019-08-25 11:28:27'),(45,1,'登陆',1,NULL,'2019-08-26 08:49:13'),(46,1,'退出',1,NULL,'2019-08-26 10:43:22'),(47,1,'登陆',1,NULL,'2019-08-26 10:43:23'),(48,1,'退出',1,NULL,'2019-08-26 10:44:26'),(49,1,'登陆',1,NULL,'2019-08-26 10:44:29'),(50,1,'退出',1,NULL,'2019-08-26 10:56:37'),(51,1,'登陆',1,NULL,'2019-08-26 10:56:39'),(52,1,'登陆',1,NULL,'2019-08-26 10:56:45'),(53,1,'登陆',1,NULL,'2019-08-26 10:56:51'),(54,1,'退出',1,NULL,'2019-08-26 10:57:23'),(55,1,'登陆',1,NULL,'2019-08-26 10:57:28'),(56,1,'登陆',1,NULL,'2019-08-26 10:57:39'),(57,1,'登陆',1,NULL,'2019-08-26 10:57:47'),(58,1,'登陆',1,NULL,'2019-08-26 10:57:52'),(59,1,'退出',1,NULL,'2019-08-26 17:11:29'),(60,1,'登陆',1,NULL,'2019-08-26 17:11:30'),(61,1,'退出',1,NULL,'2019-08-26 17:19:24'),(62,1,'登陆',1,NULL,'2019-08-26 17:19:26'),(63,1,'退出',1,NULL,'2019-08-26 17:24:18'),(64,1,'登陆',1,NULL,'2019-08-26 17:24:19'),(65,1,'退出',1,NULL,'2019-08-26 17:25:32'),(66,1,'登陆',1,NULL,'2019-08-26 17:25:33'),(67,1,'退出',1,NULL,'2019-08-26 17:29:05'),(68,1,'登陆',1,NULL,'2019-08-26 17:29:07'),(69,1,'退出',1,NULL,'2019-08-26 17:30:02'),(70,1,'登陆',1,NULL,'2019-08-26 17:30:03'),(71,1,'登陆',1,NULL,'2019-08-27 08:35:06'),(72,1,'登陆',1,NULL,'2019-08-28 08:02:19'),(73,1,'退出',1,NULL,'2019-08-28 08:56:35'),(74,1,'登陆',1,NULL,'2019-08-28 08:56:36'),(75,1,'登陆',1,NULL,'2019-08-28 17:08:57'),(76,1,'退出',1,NULL,'2019-08-28 19:14:31'),(77,1,'登陆',1,NULL,'2019-08-28 19:14:32'),(78,1,'退出',1,NULL,'2019-08-28 19:24:09'),(79,1,'登陆',1,NULL,'2019-08-28 19:24:10'),(80,1,'登陆',1,NULL,'2019-08-29 07:06:30'),(81,1,'登陆',1,NULL,'2019-08-29 15:41:21'),(82,1,'重置密码',1,'','2019-08-29 15:47:07'),(83,1,'退出',1,NULL,'2019-08-29 15:47:11'),(84,3,'登陆',1,NULL,'2019-08-29 15:47:22'),(85,1,'登陆',1,NULL,'2019-08-29 15:53:14'),(86,1,'登陆',1,NULL,'2019-08-30 09:54:21'),(87,1,'登陆',1,NULL,'2019-08-30 16:30:52'),(88,1,'登陆',1,NULL,'2019-08-31 08:48:10'),(89,1,'登陆',1,NULL,'2019-08-31 18:52:25'),(90,1,'登陆',1,NULL,'2019-09-01 16:14:54'),(91,1,'登陆',1,NULL,'2019-09-02 08:46:01'),(92,1,'登陆',1,NULL,'2019-09-02 16:07:37'),(93,1,'登陆',1,NULL,'2019-09-02 22:20:37'),(94,1,'登陆',1,NULL,'2019-09-03 07:51:58'),(95,1,'登陆',1,NULL,'2019-09-03 08:42:22'),(96,1,'登陆',1,NULL,'2019-09-03 14:27:18'),(97,1,'登陆',1,NULL,'2019-09-03 14:56:34'),(98,1,'登陆',1,NULL,'2019-09-04 07:36:44'),(99,1,'退出',1,NULL,'2019-09-04 07:58:09'),(100,1,'登陆',1,NULL,'2019-09-04 07:58:10'),(101,1,'退出',1,NULL,'2019-09-04 08:02:09'),(102,1,'登陆',1,NULL,'2019-09-04 08:02:11'),(103,1,'退出',1,NULL,'2019-09-04 08:06:58'),(104,1,'登陆',1,NULL,'2019-09-04 08:06:59'),(105,1,'登陆',1,NULL,'2019-09-04 14:52:39'),(106,1,'退出',1,NULL,'2019-09-04 19:52:11'),(107,1,'登陆',1,NULL,'2019-09-04 19:52:12'),(108,1,'退出',1,NULL,'2019-09-04 19:52:52'),(109,1,'登陆',1,NULL,'2019-09-04 19:52:53'),(110,1,'退出',1,NULL,'2019-09-04 20:00:41'),(111,1,'登陆',1,NULL,'2019-09-04 20:00:43'),(112,1,'登陆',1,NULL,'2019-09-04 20:21:28'),(113,1,'登陆',1,NULL,'2019-09-05 07:41:27'),(114,1,'登陆',1,NULL,'2019-09-05 15:38:33'),(115,1,'登陆',1,NULL,'2019-09-06 13:39:50'),(116,1,'登陆',1,NULL,'2019-09-06 22:30:20'),(117,1,'登陆',1,NULL,'2019-09-07 08:00:29'),(118,1,'登陆',1,NULL,'2019-09-07 19:01:47'),(119,1,'登陆',1,NULL,'2019-09-08 10:52:26'),(120,1,'退出',1,NULL,'2019-09-08 16:26:59'),(121,1,'登陆',1,NULL,'2019-09-08 16:27:00'),(122,1,'登陆',1,NULL,'2019-09-09 08:06:26'),(123,1,'退出',1,NULL,'2019-09-09 10:22:36'),(124,1,'登陆',1,NULL,'2019-09-09 10:22:48'),(125,1,'退出',1,NULL,'2019-09-09 10:35:50'),(126,1,'登陆',1,NULL,'2019-09-09 10:35:51'),(127,1,'登陆',1,NULL,'2019-09-09 16:38:14'),(128,1,'登陆',1,NULL,'2019-09-09 22:45:17'),(129,1,'登陆',1,NULL,'2019-09-10 08:08:08'),(130,1,'登陆',1,NULL,'2019-09-10 23:50:34'),(131,1,'登陆',1,NULL,'2019-09-10 23:50:46'),(132,1,'登陆',1,NULL,'2019-09-11 07:49:03'),(133,1,'退出',1,NULL,'2019-09-11 08:04:13'),(134,1,'登陆',1,NULL,'2019-09-11 08:04:15'),(135,1,'登陆',1,NULL,'2019-09-11 15:16:22'),(136,1,'登陆',1,NULL,'2019-09-12 08:04:36'),(137,1,'登陆',1,NULL,'2019-09-12 15:41:35'),(138,1,'登陆',1,NULL,'2019-09-13 02:13:56'),(139,1,'登陆',1,NULL,'2019-09-13 08:16:54'),(140,1,'登陆',1,NULL,'2019-09-13 08:16:54'),(141,1,'登陆',1,NULL,'2019-09-14 09:51:37'),(142,1,'登陆',1,NULL,'2019-09-14 18:19:01'),(143,1,'登陆',1,NULL,'2019-09-15 09:14:15'),(144,1,'登陆',1,NULL,'2019-09-15 19:06:25'),(145,1,'登陆',1,NULL,'2019-09-16 15:32:39'),(146,1,'登陆',1,NULL,'2019-09-16 21:45:46'),(147,1,'登陆',1,NULL,'2019-09-17 14:15:02'),(148,1,'登陆',1,NULL,'2019-09-17 23:14:33'),(149,1,'登陆',1,NULL,'2019-09-18 07:52:59'),(150,1,'登陆',1,NULL,'2019-09-18 17:50:01'),(151,1,'登陆',1,NULL,'2019-09-19 04:26:59'),(152,1,'登陆',1,NULL,'2019-09-19 10:31:50'),(153,1,'退出',1,NULL,'2019-09-19 16:20:18'),(154,1,'登陆',1,NULL,'2019-09-19 16:20:19'),(155,1,'退出',1,NULL,'2019-09-19 16:31:48'),(156,1,'登陆',1,NULL,'2019-09-19 16:31:49'),(157,1,'登陆',1,NULL,'2019-09-19 22:49:36'),(158,1,'退出',1,NULL,'2019-09-19 23:37:36'),(159,1,'登陆',1,NULL,'2019-09-19 23:37:38'),(160,1,'登陆',1,NULL,'2019-09-20 07:12:08'),(161,1,'退出',1,NULL,'2019-09-20 09:01:04'),(162,1,'登陆',1,NULL,'2019-09-20 09:01:05'),(163,1,'登陆',1,NULL,'2019-09-20 09:34:34'),(164,1,'登陆',1,NULL,'2019-09-20 09:34:41'),(165,1,'登陆',1,NULL,'2019-09-20 09:35:15'),(166,1,'登陆',1,NULL,'2019-09-20 09:35:33'),(167,1,'登陆',1,NULL,'2019-09-20 09:35:35'),(168,1,'登陆',1,NULL,'2019-09-20 09:35:44'),(169,1,'登陆',1,NULL,'2019-09-20 09:35:49'),(170,1,'登陆',1,NULL,'2019-09-20 09:35:50'),(171,1,'登陆',1,NULL,'2019-09-20 09:35:51'),(172,1,'登陆',1,NULL,'2019-09-20 09:36:17'),(173,1,'退出',1,NULL,'2019-09-20 09:42:25'),(174,1,'登陆',1,NULL,'2019-09-20 09:42:26'),(175,1,'退出',1,NULL,'2019-09-20 09:48:10'),(176,1,'登陆',1,NULL,'2019-09-20 09:48:11'),(177,1,'退出',1,NULL,'2019-09-20 09:50:50'),(178,1,'登陆',1,NULL,'2019-09-20 09:50:51'),(179,1,'退出',1,NULL,'2019-09-20 10:02:53'),(180,1,'登陆',1,NULL,'2019-09-20 10:02:55'),(181,1,'退出',1,NULL,'2019-09-20 10:16:40'),(182,1,'登陆',1,NULL,'2019-09-20 10:16:41'),(183,1,'退出',1,NULL,'2019-09-20 10:19:52'),(184,1,'登陆',1,NULL,'2019-09-20 10:19:54'),(185,1,'登陆',1,NULL,'2019-09-20 16:25:15'),(186,1,'登陆',1,NULL,'2019-09-20 22:45:31'),(187,1,'登陆',1,NULL,'2019-09-21 07:19:17'),(188,1,'登陆',1,NULL,'2019-09-21 17:46:54'),(189,1,'登陆',1,NULL,'2019-09-22 08:06:16'),(190,1,'登陆',1,NULL,'2019-09-22 17:53:31'),(191,1,'登陆',1,NULL,'2019-09-23 07:36:25'),(192,1,'登陆',1,NULL,'2019-09-23 17:25:04'),(193,1,'登陆',1,NULL,'2019-09-23 23:35:57'),(194,1,'登陆',1,NULL,'2019-09-24 07:52:35'),(195,1,'登陆',1,NULL,'2019-09-24 16:43:20'),(196,1,'登陆',1,NULL,'2019-09-25 07:31:56'),(197,1,'登陆',1,NULL,'2019-09-25 13:43:26'),(198,1,'登陆',1,NULL,'2019-09-25 20:37:43'),(199,1,'登陆',1,NULL,'2019-09-26 07:43:05'),(200,1,'登陆',1,NULL,'2019-09-26 13:44:30'),(201,1,'登陆',1,NULL,'2019-09-26 19:14:08'),(202,1,'登陆',1,NULL,'2019-09-27 07:14:59'),(203,1,'登陆',1,NULL,'2019-09-27 13:41:02'),(204,1,'登陆',1,NULL,'2019-09-28 11:19:28'),(205,1,'退出',1,NULL,'2019-09-28 15:30:00'),(206,1,'登陆',1,NULL,'2019-09-28 15:30:04'),(207,1,'登陆',1,NULL,'2019-09-28 22:58:43'),(208,1,'登陆',1,NULL,'2019-09-29 07:27:08'),(209,1,'登陆',1,NULL,'2019-09-29 14:10:46'),(210,1,'登陆',1,NULL,'2019-10-08 17:46:07'),(211,1,'登陆',1,NULL,'2019-10-09 07:25:53'),(212,1,'登陆',1,NULL,'2019-10-09 09:48:42'),(213,1,'登陆',1,NULL,'2019-10-09 15:21:31'),(214,1,'登陆',1,NULL,'2019-10-09 15:21:42'),(215,1,'登陆',1,NULL,'2019-10-09 15:24:33'),(216,1,'登陆',1,NULL,'2019-10-09 23:19:59'),(217,1,'登陆',1,NULL,'2019-10-10 08:56:03'),(218,1,'登陆',1,NULL,'2019-10-10 08:56:03'),(219,1,'登陆',1,NULL,'2019-10-11 08:04:38'),(220,1,'登陆',1,NULL,'2019-10-12 00:50:51'),(221,1,'登陆',1,NULL,'2019-10-12 08:12:16'),(222,1,'登陆',1,NULL,'2019-10-12 14:21:58'),(223,1,'登陆',1,NULL,'2019-10-12 20:41:16'),(224,1,'登陆',1,NULL,'2019-10-14 11:33:23'),(225,1,'登陆',1,NULL,'2019-10-14 18:23:46'),(226,1,'登陆',1,NULL,'2019-10-15 08:46:17'),(227,1,'登陆',1,NULL,'2019-10-15 13:38:20'),(228,1,'登陆',1,NULL,'2019-10-15 15:45:18'),(229,1,'登陆',1,NULL,'2019-10-16 08:42:32'),(230,1,'登陆',1,NULL,'2019-10-16 14:49:48'),(231,1,'登陆',1,NULL,'2019-10-18 08:57:12'),(232,1,'登陆',1,NULL,'2019-10-18 15:58:02'),(233,1,'登陆',1,NULL,'2019-10-19 07:22:28'),(234,1,'登陆',1,NULL,'2019-10-19 13:49:18'),(235,1,'登陆',1,NULL,'2019-10-19 20:15:16'),(236,1,'登陆',1,NULL,'2019-10-20 08:49:52'),(237,1,'登陆',1,NULL,'2019-10-20 16:43:05'),(238,1,'登陆',1,NULL,'2019-10-21 07:39:10'),(239,1,'登陆',1,NULL,'2019-10-21 16:00:56'),(240,1,'登陆',1,NULL,'2019-10-21 22:24:43'),(241,1,'登陆',1,NULL,'2019-10-22 08:37:02'),(242,1,'登陆',1,NULL,'2019-10-22 16:47:54'),(243,1,'登陆',1,NULL,'2019-10-23 08:06:13'),(244,1,'登陆',1,NULL,'2019-10-24 09:05:15'),(245,1,'登陆',1,NULL,'2019-10-25 11:31:32'),(246,1,'登陆',1,NULL,'2019-10-26 14:48:25'),(247,1,'登陆',1,NULL,'2019-10-27 08:38:22'),(248,1,'登陆',1,NULL,'2019-10-28 07:33:38'),(249,1,'登陆',1,NULL,'2019-10-28 10:26:32'),(250,1,'登陆',1,NULL,'2019-10-28 13:53:48'),(251,1,'登陆',1,NULL,'2019-10-29 07:58:01'),(252,1,'登陆',1,NULL,'2019-10-29 10:01:04'),(253,1,'登陆',1,NULL,'2019-10-29 14:47:59'),(254,1,'登陆',1,NULL,'2019-10-30 08:35:47'),(255,1,'登陆',1,NULL,'2019-10-30 16:45:22'),(256,1,'退出',1,NULL,'2019-10-30 17:04:24'),(257,1,'登陆',1,NULL,'2019-10-30 17:04:25'),(258,1,'登陆',1,NULL,'2019-10-31 08:03:07'),(259,1,'登陆',1,NULL,'2019-11-01 09:36:15'),(260,1,'登陆',1,NULL,'2019-11-02 08:35:43'),(261,1,'登陆',1,NULL,'2019-11-03 21:22:35'),(262,1,'登陆',1,NULL,'2019-11-04 08:55:01'),(263,1,'登陆',1,NULL,'2019-11-05 08:48:36'),(264,1,'登陆',1,NULL,'2019-11-06 08:38:51'),(265,1,'退出',1,NULL,'2019-11-06 13:41:24'),(266,1,'登陆',1,NULL,'2019-11-06 13:41:26'),(267,1,'退出',1,NULL,'2019-11-06 13:41:58'),(268,1,'登陆',1,NULL,'2019-11-06 13:42:00'),(269,1,'登陆',1,NULL,'2019-11-07 08:58:32'),(270,1,'登陆',1,NULL,'2019-11-08 11:28:34'),(271,1,'登陆',1,NULL,'2019-11-09 15:53:42'),(272,1,'登陆',1,NULL,'2019-11-11 09:00:56'),(273,1,'登陆',1,NULL,'2019-11-11 15:06:43'),(274,1,'登陆',1,NULL,'2019-11-12 08:02:29'),(275,1,'登陆',1,NULL,'2019-11-12 20:34:18'),(276,1,'登陆',1,NULL,'2019-11-13 07:27:21'),(277,1,'登陆',1,NULL,'2019-11-13 13:43:58'),(278,1,'退出',1,NULL,'2019-11-13 15:05:58'),(279,1,'登陆',1,NULL,'2019-11-13 15:05:59'),(280,1,'退出',1,NULL,'2019-11-13 15:18:28'),(281,1,'登陆',1,NULL,'2019-11-13 15:18:30'),(282,1,'退出',1,NULL,'2019-11-13 15:30:58'),(283,1,'登陆',1,NULL,'2019-11-13 15:30:59'),(284,1,'退出',1,NULL,'2019-11-13 15:31:28'),(285,1,'登陆',1,NULL,'2019-11-13 15:31:30'),(286,1,'登陆',1,NULL,'2019-11-14 07:41:30'),(287,1,'登陆',1,NULL,'2019-11-14 09:42:14'),(288,1,'退出',1,NULL,'2019-11-14 14:53:14'),(289,1,'登陆',1,NULL,'2019-11-14 14:53:16'),(290,1,'退出',1,NULL,'2019-11-14 20:41:13'),(291,1,'登陆',1,NULL,'2019-11-14 20:41:14'),(292,1,'退出',1,NULL,'2019-11-14 20:42:29'),(293,1,'登陆',1,NULL,'2019-11-14 20:42:30'),(294,1,'登陆',1,NULL,'2019-11-15 16:50:16'),(295,1,'登陆',1,NULL,'2019-11-16 17:48:44'),(296,1,'登陆',1,NULL,'2019-11-17 07:46:30'),(297,1,'登陆',1,NULL,'2019-11-18 07:58:41'),(298,1,'登陆',1,NULL,'2019-11-19 08:31:23'),(299,1,'登陆',1,NULL,'2019-11-20 11:48:38'),(300,1,'退出',1,NULL,'2019-11-20 21:13:37'),(301,1,'登陆',1,NULL,'2019-11-20 21:13:39'),(302,1,'退出',1,NULL,'2019-11-21 11:14:54'),(303,1,'登陆',1,NULL,'2019-11-21 11:14:55'),(304,1,'退出',1,NULL,'2019-11-21 11:16:40'),(305,1,'登陆',1,NULL,'2019-11-21 11:16:48'),(306,1,'退出',1,NULL,'2019-11-21 11:39:11'),(307,1,'登陆',1,NULL,'2019-11-21 11:39:12'),(308,1,'退出',1,NULL,'2019-11-21 14:37:50'),(309,1,'登陆',1,NULL,'2019-11-21 14:37:52'),(310,1,'退出',1,NULL,'2019-11-21 14:38:10'),(311,1,'登陆',1,NULL,'2019-11-21 14:38:11'),(312,1,'登陆',1,NULL,'2019-11-22 10:43:38'),(313,1,'登陆',1,NULL,'2019-11-23 16:02:48'),(314,1,'登陆',1,NULL,'2019-11-24 14:45:16'),(315,1,'登陆',1,NULL,'2019-11-25 14:52:46'),(316,1,'登陆',1,NULL,'2019-11-26 15:07:16'),(317,1,'退出',1,NULL,'2019-11-27 21:00:15'),(318,1,'登陆',1,NULL,'2019-11-27 21:00:16'),(319,1,'退出',1,NULL,'2019-11-27 21:00:25'),(320,1,'登陆',1,NULL,'2019-11-27 21:00:26'),(321,1,'退出',1,NULL,'2019-11-27 21:02:39'),(322,1,'登陆',1,NULL,'2019-11-27 21:02:40'),(323,1,'登陆',1,NULL,'2019-11-29 08:42:27'),(324,1,'退出',1,NULL,'2019-11-29 18:10:05'),(325,1,'登陆',1,NULL,'2019-11-29 18:10:06'),(326,1,'登陆',1,NULL,'2019-11-30 18:44:39'),(327,1,'退出',1,NULL,'2019-12-01 10:25:18'),(328,1,'登陆',1,NULL,'2019-12-01 10:26:06'),(329,1,'登陆',1,NULL,'2019-12-03 11:25:13'),(330,1,'登陆',1,NULL,'2019-12-04 11:44:02'),(331,1,'登陆',1,NULL,'2019-12-06 16:10:28'),(332,1,'退出',1,NULL,'2019-12-06 16:31:48'),(333,1,'登陆',1,NULL,'2019-12-06 16:31:50'),(334,1,'退出',1,NULL,'2019-12-06 17:34:05'),(335,1,'登陆',1,NULL,'2019-12-06 17:34:09'),(336,1,'退出',1,NULL,'2019-12-06 17:35:31'),(337,1,'登陆',1,NULL,'2019-12-06 17:35:32'),(338,1,'退出',1,NULL,'2019-12-06 17:35:38'),(339,1,'登陆',1,NULL,'2019-12-06 17:35:39'),(340,1,'登陆',1,NULL,'2019-12-07 18:27:00'),(341,1,'登陆',1,NULL,'2019-12-08 20:32:18'),(342,1,'登陆',1,NULL,'2019-12-09 17:53:48'),(343,1,'登陆',1,NULL,'2019-12-09 21:40:42'),(344,1,'登陆',1,NULL,'2019-12-10 21:57:50'),(345,1,'登陆',1,NULL,'2019-12-10 21:59:21'),(346,1,'退出',1,NULL,'2019-12-10 22:46:25'),(347,1,'登陆',1,NULL,'2019-12-10 22:48:26'),(348,1,'退出',1,NULL,'2019-12-10 23:02:44'),(349,1,'登陆',1,NULL,'2019-12-10 23:02:46'),(350,1,'登陆',1,NULL,'2019-12-11 00:10:12'),(351,1,'登陆',1,NULL,'2019-12-11 09:19:09'),(352,1,'登陆',1,NULL,'2019-12-12 11:47:20'),(353,1,'登陆',1,NULL,'2019-12-13 13:42:14'),(354,1,'登陆',1,NULL,'2019-12-14 19:13:08'),(355,1,'登陆',1,NULL,'2019-12-16 11:11:58'),(356,1,'退出',1,NULL,'2019-12-16 17:59:44'),(357,1,'登陆',1,NULL,'2019-12-16 17:59:47'),(358,1,'登陆',1,NULL,'2019-12-19 17:57:20'),(359,1,'登陆',1,NULL,'2019-12-21 20:19:45'),(360,1,'登陆',1,NULL,'2019-12-22 20:20:56'),(361,1,'登陆',1,NULL,'2019-12-24 21:12:36'),(362,1,'登陆',1,NULL,'2019-12-25 21:18:14'),(363,1,'登陆',1,NULL,'2019-12-26 09:21:29'),(364,1,'退出',1,NULL,'2019-12-27 20:22:21'),(365,1,'登陆',1,NULL,'2019-12-27 20:22:23'),(366,1,'退出',1,NULL,'2019-12-27 20:24:07'),(367,1,'登陆',1,NULL,'2019-12-27 20:24:08'),(368,1,'登陆',1,NULL,'2019-12-28 20:54:36'),(369,1,'登陆',1,NULL,'2019-12-30 08:41:16'),(370,1,'登陆',1,NULL,'2020-01-01 09:31:32'),(371,1,'登陆',1,NULL,'2020-01-02 18:51:35'),(372,1,'退出',1,NULL,'2020-01-03 15:50:45'),(373,1,'登陆',1,NULL,'2020-01-03 15:50:50'),(374,1,'登陆',1,NULL,'2020-01-04 17:21:30'),(375,1,'登陆',1,NULL,'2020-01-06 08:40:06'),(376,1,'登陆',1,NULL,'2020-01-07 10:09:13'),(377,1,'登陆',1,NULL,'2020-01-07 10:12:42'),(378,1,'登陆',1,NULL,'2020-01-07 10:19:56'),(379,1,'重置密码',1,'','2020-01-07 10:25:37'),(380,1,'退出',1,NULL,'2020-01-07 11:20:21'),(381,1,'登陆',1,NULL,'2020-01-07 11:20:35'),(382,1,'退出',1,NULL,'2020-01-07 11:28:15'),(383,1,'退出',1,NULL,'2020-01-07 15:46:50'),(384,1,'登陆',1,NULL,'2020-01-07 15:47:56'),(385,1,'登陆',1,NULL,'2020-01-07 15:47:58'),(386,1,'登陆',1,NULL,'2020-01-07 15:48:09'),(387,1,'退出',1,NULL,'2020-01-07 15:49:09'),(388,1,'登陆',1,NULL,'2020-01-07 15:49:14'),(389,1,'登陆',1,NULL,'2020-01-07 15:53:18'),(390,1,'登陆',1,NULL,'2020-01-07 16:00:37'),(391,1,'登陆',1,NULL,'2020-01-07 16:04:09'),(392,1,'登陆',1,NULL,'2020-01-07 16:31:53'),(393,1,'登陆',1,NULL,'2020-01-07 16:34:12'),(394,1,'登陆',1,NULL,'2020-01-07 17:34:39'),(395,1,'登陆',1,NULL,'2020-01-07 17:34:46'),(396,1,'登陆',1,NULL,'2020-01-07 17:37:02'),(397,1,'登陆',1,NULL,'2020-01-07 17:37:05'),(398,1,'登陆',1,NULL,'2020-01-07 17:38:04'),(399,1,'退出',1,NULL,'2020-01-07 17:39:28'),(400,1,'登陆',1,NULL,'2020-01-07 17:40:50'),(401,1,'登陆',1,NULL,'2020-01-07 17:48:19'),(402,1,'登陆',1,NULL,'2020-01-07 18:03:49'),(403,1,'登陆',1,NULL,'2020-01-07 18:40:23'),(404,1,'登陆',1,NULL,'2020-01-07 19:23:34'),(405,1,'登陆',1,NULL,'2020-01-07 20:42:58'),(406,1,'登陆',1,NULL,'2020-01-07 20:46:43'),(407,1,'登陆',1,NULL,'2020-01-07 21:34:19'),(408,1,'登陆',1,NULL,'2020-01-07 22:51:57'),(409,1,'登陆',1,NULL,'2020-01-07 23:30:44'),(410,1,'登陆',1,NULL,'2020-01-08 08:52:20'),(411,1,'退出',1,NULL,'2020-01-08 15:34:32'),(412,1,'登陆',1,NULL,'2020-01-08 15:35:01'),(413,1,'退出',1,NULL,'2020-01-08 15:35:22'),(414,1,'登陆',1,NULL,'2020-01-08 15:35:35'),(415,1,'退出',1,NULL,'2020-01-08 15:38:29'),(416,1,'登陆',1,NULL,'2020-01-08 15:38:35'),(417,1,'退出',1,NULL,'2020-01-08 15:42:10'),(418,1,'登陆',1,NULL,'2020-01-08 15:57:57'),(419,1,'退出',1,NULL,'2020-01-09 14:33:07'),(420,1,'登陆',1,NULL,'2020-01-09 14:33:11'),(421,1,'退出',1,NULL,'2020-01-09 14:33:13'),(422,1,'登陆',1,NULL,'2020-01-09 14:33:16'),(423,1,'退出',1,NULL,'2020-01-09 14:35:17'),(424,1,'登陆',1,NULL,'2020-01-09 14:35:19'),(425,1,'退出',1,NULL,'2020-01-09 14:35:21'),(426,1,'登陆',1,NULL,'2020-01-09 14:35:29'),(427,1,'退出',1,NULL,'2020-01-09 14:35:32'),(428,1,'登陆',1,NULL,'2020-01-09 14:35:38'),(429,1,'登陆',1,NULL,'2020-01-11 20:02:23'),(430,1,'登陆',1,NULL,'2020-01-12 20:16:11'),(431,1,'退出',1,NULL,'2020-01-12 22:10:20'),(432,1,'登陆',1,NULL,'2020-01-12 22:10:22'),(433,1,'退出',1,NULL,'2020-01-13 21:17:56'),(434,1,'登陆',1,NULL,'2020-01-13 21:17:58'),(435,1,'退出',1,NULL,'2020-01-13 21:22:32'),(436,1,'登陆',1,NULL,'2020-01-13 21:22:34'),(437,1,'退出',1,NULL,'2020-01-13 21:23:38'),(438,1,'登陆',1,NULL,'2020-01-13 21:23:39'),(439,1,'登陆',1,NULL,'2020-01-15 07:57:24'),(440,1,'登陆',1,NULL,'2020-01-16 08:42:58'),(441,1,'登陆',1,NULL,'2020-01-17 11:33:13'),(442,1,'登陆',1,NULL,'2020-01-18 13:39:24'),(443,1,'登陆',1,NULL,'2020-01-19 13:52:45'),(444,1,'登陆',1,NULL,'2020-01-20 19:21:44'),(445,1,'登陆',1,NULL,'2020-01-21 20:17:12'),(446,1,'登陆',1,NULL,'2020-01-23 08:40:29'),(447,1,'登陆',1,NULL,'2020-01-23 14:00:18'),(448,1,'登陆',1,NULL,'2020-01-24 15:00:47'),(449,1,'登陆',1,NULL,'2020-01-25 19:57:38'),(450,1,'登陆',1,NULL,'2020-01-27 09:32:27'),(451,1,'登陆',1,NULL,'2020-01-28 18:51:47'),(452,1,'登陆',1,NULL,'2020-01-29 20:03:57'),(453,1,'退出',1,NULL,'2020-01-30 09:55:37'),(454,1,'登陆',1,NULL,'2020-01-30 09:55:39'),(455,1,'退出',1,NULL,'2020-01-30 09:56:16'),(456,1,'登陆',1,NULL,'2020-01-30 09:56:17'),(457,1,'退出',1,NULL,'2020-02-01 08:51:43'),(458,1,'登陆',1,NULL,'2020-02-01 08:51:45'),(459,1,'登陆',1,NULL,'2020-02-02 08:56:52'),(460,1,'登陆',1,NULL,'2020-02-02 21:22:09'),(461,1,'登陆',1,NULL,'2020-02-03 14:09:06'),(462,1,'登陆',1,NULL,'2020-02-04 08:39:27'),(463,1,'登陆',1,NULL,'2020-02-04 12:06:31'),(464,1,'登陆',1,NULL,'2020-02-04 12:56:36'),(465,1,'登陆',1,NULL,'2020-02-05 17:54:16'),(466,1,'登陆',1,NULL,'2020-02-05 20:43:53'),(467,1,'登陆',1,NULL,'2020-02-06 19:29:47'),(468,1,'登陆',1,NULL,'2020-02-09 08:52:01'),(469,1,'登陆',1,NULL,'2020-02-10 09:43:38'),(470,1,'登陆',1,NULL,'2020-02-11 10:39:13'),(471,1,'登陆',1,NULL,'2020-02-11 19:49:11'),(472,1,'登陆',1,NULL,'2020-02-11 19:49:11'),(473,1,'登陆',1,NULL,'2020-02-11 19:49:11'),(474,1,'登陆',1,NULL,'2020-02-11 19:49:11');

/*Table structure for table `sys_permission` */

DROP TABLE IF EXISTS `sys_permission`;

CREATE TABLE `sys_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parentId` int(11) NOT NULL COMMENT '父ID',
  `name` varchar(50) NOT NULL COMMENT '名称',
  `icon` varchar(30) DEFAULT NULL COMMENT '图标',
  `path` varchar(1000) DEFAULT NULL COMMENT '路由',
  `redirect` varchar(1000) DEFAULT NULL COMMENT '重定向路径',
  `active_menu` varchar(1000) DEFAULT NULL COMMENT '菜单栏高亮路径，默认为本路径',
  `type` tinyint(1) NOT NULL COMMENT '类型1 菜单 2：按钮 3：子页面',
  `permission` varchar(50) DEFAULT NULL COMMENT '权限标识',
  `sort` int(11) NOT NULL COMMENT '排序',
  `component` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_parentId` (`parentId`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_permission` */

insert  into `sys_permission`(`id`,`parentId`,`name`,`icon`,`path`,`redirect`,`active_menu`,`type`,`permission`,`sort`,`component`) values (5,0,'系统设置','config','/sysConfig',NULL,NULL,4,'sys',20,'Layout'),(6,5,'用户管理','','user',NULL,NULL,1,'add',0,'sysConfig/User'),(7,5,'角色管理','','role',NULL,NULL,1,'',1,'sysConfig/Role/role'),(8,5,'菜单管理','','page',NULL,NULL,1,'',2,'sysConfig/Page'),(13,42,'系统日志','','log',NULL,NULL,1,'',1,'sysConfig/SysLog'),(17,5,'定时任务','','task',NULL,NULL,1,'',4,'sysConfig/sysTask'),(18,5,'项目管理','','project',NULL,NULL,1,'',3,'sysConfig/Project'),(22,5,'数据字典','','dict',NULL,NULL,1,'',6,'sysConfig/sysDict'),(24,3,'UI步骤管理','','/testCases/steps/:id',NULL,NULL,3,'',0,'functions/uiTest/TestStep'),(25,0,'公共配置','peoples','/publicConfig',NULL,NULL,4,'',4,'Layout'),(26,25,'任务调度','','autoTestTask','/publicConfig/autoTestTask/list',NULL,1,'',2,'publicConfig/autoTestTask/index'),(27,-1,'UI自动化','ui60','/uiTest',NULL,NULL,4,'',0,'Layout'),(32,27,'用例管理','','testCase','/uiTest/testCase/list',NULL,1,'',1,'uiTest/UITestCase/index'),(33,32,'用例步骤','','step',NULL,'/uiTest/testCase',5,'',1,'uiTest/UITestCase/TestStep'),(34,32,'用例列表','','list',NULL,'/uiTest/testCase',3,'',0,'uiTest/UITestCase/list'),(35,27,'业务流管理','','business','/uiTest/business/list','',1,'',2,'uiTest/UIBusiness/index'),(36,35,'业务流列表','','list','','/uiTest/business',3,'',0,'uiTest/UIBusiness/list'),(37,35,'业务流用例','','uiBusinessCase','','/uiTest/business',5,'',1,'uiTest/UIBusiness/UIBusinessCase'),(38,26,'任务列表','','list',NULL,'/publicConfig/autoTestTask',3,'',0,'publicConfig/autoTestTask/autoTestTask'),(39,25,'执行机管理','','client','','',1,'',0,'publicConfig/client/client'),(40,42,'SQL监控','','/iframe/druid?http://rabbittest.xyz/public/monitor/druid','','',1,'',2,'iframe/index'),(41,42,'系统接口','','/iframe/swagger2?http://rabbittest.xyz/public/swagger-ui.html','','',1,'',3,'iframe/index'),(42,0,'系统监控','system-monitoring','/sysMonitor',NULL,NULL,4,'',21,'Layout'),(43,25,'公共参数','','globalParams','','',1,'',3,'publicConfig/globalParams/globalParams'),(46,26,'新增任务','','new',NULL,'/publicConfig/autoTestTask',3,'',0,'publicConfig/autoTestTask/autoTestTask-add-or-update'),(47,26,'修改任务','','edit',NULL,'/publicConfig/autoTestTask',3,'',0,'publicConfig/autoTestTask/autoTestTask-add-or-update'),(49,27,'页面元素','','pageElement','/uiTest/pageElement/page','',1,'',0,'uiTest/ProjectPage/index'),(54,49,'页面列表','','page','','/uiTest/pageElement',3,'',0,'uiTest/ProjectPage/projectPage'),(55,49,'元素列表','','element','','/uiTest/pageElement',5,'',0,'uiTest/ProjectPage/PageElement/pageElement'),(56,27,'执行计划','','testPlan','/uiTest/testPlan/list','',1,'',3,'uiTest/TestPlan/index'),(57,56,'计划列表','','list','','/uiTest/testPlan',3,'',1,'uiTest/TestPlan/testPlan'),(58,56,'新增计划','','new','','/uiTest/testPlan',5,'',2,'uiTest/TestPlan/testPlan-add-or-update'),(59,56,'修改计划','','edit','','/uiTest/testPlan',5,'',3,'uiTest/TestPlan/testPlan-add-or-update'),(60,27,'测试结果','','result','/uiTest/result/plan','',1,'',4,'uiTest/PlanLog/index'),(61,60,'测试计划结果列表','','plan','','/uiTest/result',3,'',1,'uiTest/PlanLog/planList'),(62,60,'测试计划结果详情','','detail','','/uiTest/result',3,'',2,'uiTest/PlanLog/planDetail'),(63,60,'业务流结果详情','','businessDetail','','/uiTest/result',3,'',3,'uiTest/PlanLog/businessDetail'),(64,60,'用例结果详情','','caseDetail','','/uiTest/result',3,'',4,'uiTest/PlanLog/caseDetail'),(65,0,'接口自动化','interface','/apiTest',NULL,NULL,4,'',1,'Layout'),(66,0,'APP自动化','iPhone','/app',NULL,NULL,4,'',3,'Layout'),(67,65,'用例管理','','interface',NULL,NULL,1,'',3,'apiTest/Interface/index'),(68,66,'用例管理','','cases',NULL,NULL,1,'',0,'appTest/index'),(69,25,'测试数据库','','testDatabase','','',1,'',4,'publicConfig/testDatabase/testDatabase'),(70,0,'jmeter托管','example','/jmeter',NULL,NULL,4,'',2,'Layout'),(71,70,'脚本管理','','script','/jmeter/script/list','',1,'',0,'jmeter/script/index'),(72,71,'脚本列表','','list','','/jmeter/script',3,'',0,'jmeter/script/script'),(73,71,'新增脚本','','new','','/jmeter/script',5,'',0,'jmeter/script/script-add-or-update'),(74,71,'编辑脚本','','edit','','/jmeter/script',5,'',0,'jmeter/script/script-add-or-update'),(75,70,'任务管理','','testPlan','/jmeter/testPlan/list','',1,'',2,'jmeter/TestPlan/index'),(76,75,'任务列表','','list','','/jmeter/testPlan',3,'',1,'jmeter/TestPlan/testPlan'),(77,75,'新增任务','','new','','/jmeter/testPlan',5,'',2,'jmeter/TestPlan/testPlan-add-or-update'),(78,75,'修改任务','','edit','','/jmeter/testPlan',5,'',3,'jmeter/TestPlan/testPlan-add-or-update'),(79,25,'设备管理','','device','','',1,'',1,'publicConfig/device/device'),(81,0,'UI自动化','ui60','/uiTestNew',NULL,NULL,4,'',0,'Layout'),(82,81,'用例管理','','testCase','/uiTestNew/testCase/list',NULL,1,'',2,'uiTestNew/UITestCase/index'),(83,81,'业务管理','','business','/uiTestNew/business/list','',1,'',1,'uiTestNew/UIBusiness/index'),(84,81,'页面元素','','pageElement','/uiTestNew/pageElement/list','',1,'',0,'uiTestNew/ProjectPage/index'),(85,81,'执行计划','','testPlan','/uiTestNew/testPlan/list','',1,'',4,'uiTestNew/TestPlan/index'),(86,81,'测试结果','','result','/uiTestNew/result/plan','',1,'',5,'uiTestNew/PlanLog/index'),(87,82,'新增用例步骤','','new',NULL,'/uiTestNew/testCase',5,'',1,'uiTestNew/UITestCase/TestStep'),(88,82,'用例列表','','list',NULL,'/uiTestNew/testCase',3,'',0,'uiTestNew/UITestCase/list'),(89,83,'新增业务流','','new','','/uiTestNew/business',3,'',1,'uiTestNew/UIBusiness/TestStep'),(90,83,'编辑业务流','','edit','','/uiTestNew/business',5,'',2,'uiTestNew/UIBusiness/TestStep'),(91,84,'页面列表','','list','','/uiTestNew/pageElement',3,'',0,'uiTestNew/ProjectPage/projectPage'),(92,84,'元素列表','','element','','/uiTestNew/pageElement',5,'',0,'uiTestNew/ProjectPage/PageElement/pageElement'),(93,85,'计划列表','','list','','/uiTestNew/testPlan',3,'',1,'uiTestNew/TestPlan/testPlan'),(94,85,'新增计划','','new','','/uiTestNew/testPlan',5,'',2,'uiTestNew/TestPlan/testPlan-add-or-update'),(95,85,'修改计划','','edit','','/uiTestNew/testPlan',5,'',3,'uiTestNew/TestPlan/testPlan-add-or-update'),(96,86,'测试结果列表','','plan','','/uiTestNew/result',3,'',1,'uiTestNew/PlanLog/planList'),(97,86,'测试结果详情','','detail','','/uiTestNew/result',5,'',2,'uiTestNew/PlanLog/planDetails'),(100,82,'编辑用例步骤','','edit',NULL,'/uiTestNew/testCase',5,'',3,'uiTestNew/UITestCase/TestStep'),(101,83,'业务列表','','list',NULL,'/uiTestNew/business',3,'',0,'uiTestNew/UIBusiness/list'),(102,81,'用例集管理','','testSuite','',NULL,1,'',3,'uiTestNew/TestSuite/index'),(103,25,'自定义Ui关键字','','customerAction','/publicConfig/customerAction/list','',1,'',5,'publicConfig/customerAction/index'),(104,103,'关键字列表','','list','','/publicConfig/customerAction',3,'',1,'publicConfig/customerAction/customerAction'),(105,103,'编辑关键字','','edit','','/publicConfig/customerAction',5,'',1,'publicConfig/customerAction/customerAction-add-or-update'),(106,103,'新增关键字','','new','','/publicConfig/customerAction',5,'',1,'publicConfig/customerAction/customerAction-add-or-update'),(107,65,'接口管理','','api','',NULL,1,'',2,'apiTest/api/index'),(108,65,'环境配置','','apiEnv','',NULL,1,'',1,'apiTest/apiEnv/index'),(109,25,'标签配置','','flag','','',1,'',6,'publicConfig/flag/flag'),(110,25,'环境配置','','env','','',1,'',7,'publicConfig/env/env');

/*Table structure for table `sys_project` */

DROP TABLE IF EXISTS `sys_project`;

CREATE TABLE `sys_project` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(64) DEFAULT NULL,
  `update_by` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `sys_project` */

insert  into `sys_project`(`id`,`project_name`,`description`,`create_time`,`update_time`,`create_by`,`update_by`) values (1,'项目1','测试项目1','2019-02-27 15:43:00','2019-06-03 23:01:46',NULL,'admin'),(2,'项目2','测试项目2','2019-02-27 15:43:15','2019-02-27 15:43:15',NULL,NULL);

/*Table structure for table `sys_role` */

DROP TABLE IF EXISTS `sys_role`;

CREATE TABLE `sys_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_role` */

insert  into `sys_role`(`id`,`name`,`description`,`createTime`,`updateTime`) values (1,'admin','管理员','2017-05-01 13:25:39','2019-05-05 13:45:00'),(4,'test1','测试用户1','2019-01-30 22:27:41','2020-01-12 12:05:32');

/*Table structure for table `sys_role_permission` */

DROP TABLE IF EXISTS `sys_role_permission`;

CREATE TABLE `sys_role_permission` (
  `roleId` int(11) NOT NULL,
  `permissionId` int(11) NOT NULL,
  PRIMARY KEY (`roleId`,`permissionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_role_permission` */

insert  into `sys_role_permission`(`roleId`,`permissionId`) values (4,65),(4,70),(4,71),(4,72),(4,73),(4,74),(4,75),(4,76),(4,77),(4,78),(4,81),(4,82),(4,83),(4,84),(4,85),(4,86),(4,87),(4,88),(4,89),(4,90),(4,91),(4,92),(4,93),(4,94),(4,95),(4,96),(4,97),(4,100),(4,101),(4,102),(4,107),(4,108);

/*Table structure for table `sys_role_user` */

DROP TABLE IF EXISTS `sys_role_user`;

CREATE TABLE `sys_role_user` (
  `userId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_role_user` */

insert  into `sys_role_user`(`userId`,`roleId`) values (1,1);

/*Table structure for table `sys_user` */

DROP TABLE IF EXISTS `sys_user`;

CREATE TABLE `sys_user` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `project_id` bigint(11) DEFAULT '-1',
  `headImgUrl` varchar(255) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `telephone` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_user` */

insert  into `sys_user`(`id`,`username`,`password`,`nickname`,`project_id`,`headImgUrl`,`phone`,`telephone`,`email`,`birthday`,`sex`,`status`,`createTime`,`updateTime`) values (1,'admin','$2a$10$h/EuvQwXor9o4/BIXFZKP.VDVJuZCSLDvQBzdeh.mlgDVjMT7jJ6m','超级管理员',1,NULL,'','','1314@163.com','1998-07-01',0,1,'2017-04-10 15:21:38','2019-06-04 14:54:06');

/*Table structure for table `sys_user_project` */

DROP TABLE IF EXISTS `sys_user_project`;

CREATE TABLE `sys_user_project` (
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`projectId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `sys_user_project` */

insert  into `sys_user_project`(`userId`,`projectId`) values (2,1),(3,1),(3,2),(4,1),(4,2),(5,1),(6,1),(6,2),(7,2),(8,1),(9,2),(10,1),(11,1),(12,2),(13,2),(14,2),(15,2),(16,2),(17,2),(18,2),(19,2),(20,2),(21,2),(22,1),(22,2),(23,2),(24,2),(25,2);

/*Table structure for table `t_api` */

DROP TABLE IF EXISTS `t_api`;

CREATE TABLE `t_api` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '接口名称',
  `labels` text COMMENT '标签',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `api_suite_id` bigint(11) DEFAULT NULL COMMENT '接口分类id',
  `method` varchar(11) DEFAULT NULL COMMENT '请求类型',
  `env_id` bigint(11) DEFAULT NULL COMMENT '环境id',
  `domain` varchar(512) DEFAULT NULL COMMENT '请求的协议+域名',
  `path` text COMMENT '请求路径',
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '类型 0公共接口  业务流接口',
  `remark` text COMMENT '备注',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '状态 0未完成 1已完成',
  `req_header` text COMMENT '请求头',
  `req_query` text COMMENT '请求query',
  `req_body_data` text COMMENT '请求body from-data格式',
  `req_body_json` text COMMENT '请求body json格式',
  `req_body_type` varchar(11) DEFAULT 'raw' COMMENT '请求body的类型',
  `req_extract` text COMMENT '请求提取参数',
  `req_assert` text COMMENT '请求断言',
  `debug_rsp` varchar(20) DEFAULT NULL COMMENT '调试响应对象',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_api` */

insert  into `t_api`(`id`,`name`,`labels`,`project_id`,`api_suite_id`,`method`,`env_id`,`domain`,`path`,`type`,`remark`,`status`,`req_header`,`req_query`,`req_body_data`,`req_body_json`,`req_body_type`,`req_extract`,`req_assert`,`debug_rsp`,`create_by`,`create_time`,`update_by`,`update_time`) values (46,'元素列表，新建一个',NULL,1,1,'GET',1,'@{domain}/public','/projectPage/listPage?pageNum=1&pageSize=10&pageCount=14&serchData=%7B%22pageName%22:%22%22,%22projectId%22:2%7D',0,'一个备注',1,'[{\"key\":\"token\",\"value\":\"eyJhbGciOiJIUzI1NiJ9.eyJMT0dJTl9VU0VSX0tFWSI6Ijg4MjRlYTk3LTc5MzktNGYyYS1iM2M1LTU2MTYzOWUyZjY3MSJ9.3aonnRcqaQUorlaBQLH8dg3zrYiAlTDQlMMgJpiuf3g\"}]','[{\"key\":\"pageNum\",\"value\":\"1\"},{\"key\":\"pageSize\",\"value\":\"10\"},{\"key\":\"pageCount\",\"value\":\"14\"},{\"key\":\"serchData\",\"value\":\"%7B%22pageName%22:%22%22,%22projectId%22:2%7D\"}]','[{\"key\":\"1121234\",\"remark\":\"\",\"type\":\"text\",\"value\":\"321412431243\"}]','[\n  1234\n]','raw','[{\"dataSource\":\"bodyJson\",\"extractExpress\":\"error.code\",\"varName\":\"errorCode\"}]','[{\"dataSource\":\"bodyJson\",\"expectRelation\":\"等于\",\"expectValue\":\"说的是\",\"extractExpress\":\"result.list[0].pageName\",\"extractType\":\"string\"},{\"dataSource\":\"code\",\"expectRelation\":\"等于\",\"expectValue\":\"200\",\"extractExpress\":\"\",\"extractType\":\"number\"},{\"dataSource\":\"bodyJson\",\"expectRelation\":\"等于\",\"expectValue\":\"401\",\"extractExpress\":\"error.code\",\"extractType\":\"number\"},{\"dataSource\":\"bodyReg\",\"expectRelation\":\"等于\",\"expectValue\":\"未登录或登陆失效，请先登录\",\"extractExpress\":\"\\\"message\\\": \\\"(.*?)\\\"\",\"extractType\":\"string\"},{\"dataSource\":\"header\",\"expectRelation\":\"等于\",\"expectValue\":\"231243\",\"extractExpress\":\"Date\",\"extractType\":\"string\"}]',NULL,'admin','2019-12-29 10:04:50','admin','2019-12-29 10:04:50');

/*Table structure for table `t_api_detail` */

DROP TABLE IF EXISTS `t_api_detail`;

CREATE TABLE `t_api_detail` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '接口名称',
  `labels` text COMMENT '标签',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `api_suite_id` bigint(11) DEFAULT NULL COMMENT '接口分类id',
  `method` varchar(11) DEFAULT NULL COMMENT '请求类型',
  `host` varchar(20) DEFAULT NULL COMMENT '请求ip或者域名',
  `path` text COMMENT '请求路径',
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '类型 0公共接口  业务流接口',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '状态 0未完成 1已完成',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_api_detail` */

insert  into `t_api_detail`(`id`,`name`,`labels`,`project_id`,`api_suite_id`,`method`,`host`,`path`,`type`,`status`,`create_by`,`create_time`,`update_by`,`update_time`) values (1,'登陆接口',NULL,1,1,'GET','192.168.1.1','/test',0,0,'system','2019-12-17 11:06:21','system','2019-12-17 11:06:21'),(6,'什么接口',NULL,1,18,'GET',NULL,'111',0,0,'admin','2019-12-17 23:56:38','admin','2019-12-18 08:34:51'),(20,'阿萨德饭',NULL,1,25,'GET',NULL,NULL,0,0,'admin','2019-12-19 00:13:29','admin','2019-12-19 00:13:29'),(33,'你大爷',NULL,1,25,'GET',NULL,NULL,0,0,'admin','2019-12-20 09:17:33','admin','2019-12-20 09:17:33');

/*Table structure for table `t_api_env` */

DROP TABLE IF EXISTS `t_api_env`;

CREATE TABLE `t_api_env` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '环境名称',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `prepend` varchar(15) NOT NULL DEFAULT 'http://',
  `domain` varchar(50) DEFAULT NULL,
  `cookie` text,
  `header` text,
  `global` text COMMENT '公共变量',
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '类型 0接口自动化',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '缺省',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_api_env` */

insert  into `t_api_env`(`id`,`name`,`project_id`,`prepend`,`domain`,`cookie`,`header`,`global`,`type`,`status`,`create_by`,`create_time`,`update_by`,`update_time`) values (1,'sit环境',1,'http://','www.baidu.com',NULL,'GET','[{\"key\":\"username\",\"remark\":\"账号\",\"value\":\"admin\"},{\"key\":\"password\",\"remark\":\"密码\",\"value\":\"admin1\"}]',0,0,'system','2019-12-17 11:06:21','admin','2019-12-17 11:06:21'),(6,'uat环境',1,'http://','www11',NULL,'GET','[]',0,0,'admin','2019-12-17 23:56:38','admin','2019-12-18 08:34:51'),(20,'生产环境',1,'http://','www.rabbittest.xyz/public',NULL,'GET','[]',0,0,'admin','2019-12-19 00:13:29','admin','2019-12-19 00:13:29');

/*Table structure for table `t_api_suite` */

DROP TABLE IF EXISTS `t_api_suite`;

CREATE TABLE `t_api_suite` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '接口名称',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `remark` text,
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_api_suite` */

insert  into `t_api_suite`(`id`,`name`,`project_id`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (1,'公共分类',1,'你好',NULL,'2019-12-30 11:02:49','admin',NULL);

/*Table structure for table `t_client` */

DROP TABLE IF EXISTS `t_client`;

CREATE TABLE `t_client` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '客户端名称',
  `project_ids` varchar(100) NOT NULL DEFAULT '' COMMENT '所属项目',
  `client_ip` varchar(50) NOT NULL DEFAULT '' COMMENT '客户端ip',
  `client_port` int(11) NOT NULL DEFAULT '-1' COMMENT '客户端端口',
  `is_enable` int(11) DEFAULT '1' COMMENT '1：有效',
  `status` int(11) DEFAULT '1' COMMENT '客户端状态 1 正常 2 链接失败 3 状态未知',
  `java_version` varchar(50) DEFAULT '' COMMENT 'java版本',
  `jmeter_version` varchar(50) DEFAULT '' COMMENT 'jmeter版本',
  `appium_version` varchar(50) DEFAULT '' COMMENT 'appium版本',
  `os_name` varchar(50) DEFAULT '' COMMENT '操作系统',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT '' COMMENT 'createBy',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT '' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COMMENT='t_client';

/*Data for the table `t_client` */

insert  into `t_client`(`id`,`name`,`project_ids`,`client_ip`,`client_port`,`is_enable`,`status`,`java_version`,`jmeter_version`,`appium_version`,`os_name`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (14,'127.0.0.1:8879','1','127.0.0.1',8879,1,2,'1.8.0_161','5.1.1','1.16.0\n','Windows 10','本地调试','','2019-11-12 10:41:05','admin','2020-02-11 21:11:12'),(20,'127.0.0.1:8999','','127.0.0.1',8999,1,2,'1.8.0_161','5.1.1','1.16.0\n','Windows 10','','','2020-02-11 16:07:35','','2020-02-11 21:17:58');

/*Table structure for table `t_custom_action` */

DROP TABLE IF EXISTS `t_custom_action`;

CREATE TABLE `t_custom_action` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `dict_value_id` int(2) DEFAULT '0' COMMENT '字典id',
  `dict_value_key` text COMMENT '字典key',
  `dict_value_name` varchar(100) DEFAULT '' COMMENT '字典name',
  `dict_value_remark` text COMMENT '字典描述',
  `code` text COMMENT '脚本内容',
  `type` int(2) DEFAULT '1' COMMENT '类型 1：ui',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'update_by',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update_time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_custom_action` */

insert  into `t_custom_action`(`id`,`project_id`,`dict_value_id`,`dict_value_key`,`dict_value_name`,`dict_value_remark`,`code`,`type`,`create_by`,`create_time`,`update_by`,`update_time`) values (28,1,0,'<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\n<jmeterTestPlan version=\"1.2\" properties=\"4.0\" jmeter=\"5.0 r1823414\"> \n测试中文，我发现中文也没问题，搞定算法\n</jmeterTestPlan>\n','result - 副本3.csv,',NULL,NULL,214124,'system','2019-09-27 10:29:36','admin','2019-09-27 10:29:36');

/*Table structure for table `t_env` */

DROP TABLE IF EXISTS `t_env`;

CREATE TABLE `t_env` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '环境名字',
  `remark` varchar(512) DEFAULT NULL,
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '所属项目的id',
  `create_by` varchar(32) DEFAULT 'system' COMMENT '创建人',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_name_type_projectId` (`name`,`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='分类表';

/*Data for the table `t_env` */

insert  into `t_env`(`id`,`name`,`remark`,`project_id`,`create_by`,`create_time`) values (1,'sit环境','备注',1,NULL,'2020-02-01 10:12:12'),(2,'beta环境',NULL,1,'admin','2020-02-09 15:56:02');

/*Table structure for table `t_file_info` */

DROP TABLE IF EXISTS `t_file_info`;

CREATE TABLE `t_file_info` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT '',
  `project_id` bigint(11) DEFAULT '0',
  `md5` varchar(32) NOT NULL DEFAULT '' COMMENT '文件md5',
  `content_type` varchar(128) NOT NULL DEFAULT '',
  `size` bigint(11) NOT NULL DEFAULT '0',
  `source_id` bigint(11) NOT NULL DEFAULT '0',
  `source_type` int(2) NOT NULL DEFAULT '0' COMMENT '1、ui  2、接口 3、接口用例',
  `path` varchar(255) NOT NULL DEFAULT '' COMMENT '物理路径',
  `type` int(1) NOT NULL DEFAULT '0' COMMENT '0 非图片 1图片',
  `create_by` varchar(50) DEFAULT 'system',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_by` varchar(50) DEFAULT 'system',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

/*Data for the table `t_file_info` */

insert  into `t_file_info`(`id`,`name`,`project_id`,`md5`,`content_type`,`size`,`source_id`,`source_type`,`path`,`type`,`create_by`,`create_time`,`update_by`,`update_time`) values (14,'测试文件',1,'ff9a2dc8d68f62947c7e2d5291fe6e74','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',11194,12,1,'2019\\12\\25\\测试文件.xlsx',0,'admin',NULL,'admin',NULL);

/*Table structure for table `t_flag` */

DROP TABLE IF EXISTS `t_flag`;

CREATE TABLE `t_flag` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT 'flag名字',
  `type` int(4) NOT NULL COMMENT '类型：1.接口用例',
  `remark` varchar(512) DEFAULT NULL,
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '所属项目的id',
  `create_by` varchar(32) DEFAULT 'system' COMMENT '创建人',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uniq_name_type_projectId` (`name`,`type`,`project_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='分类表';

/*Data for the table `t_flag` */

insert  into `t_flag`(`id`,`name`,`type`,`remark`,`project_id`,`create_by`,`create_time`) values (1,'订单',1,'备注',1,NULL,NULL);

/*Table structure for table `t_global_param` */

DROP TABLE IF EXISTS `t_global_param`;

CREATE TABLE `t_global_param` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `param_name` varchar(50) NOT NULL DEFAULT '' COMMENT '参数名称',
  `project_id` bigint(11) DEFAULT '-1',
  `param_type` int(2) NOT NULL DEFAULT '1' COMMENT '参数类型：1、字符串 2、数值 3、数据库 4、布尔 5、函数',
  `param_value` varchar(512) DEFAULT '' COMMENT '参数值',
  `env_vars` text COMMENT '环境变量',
  `type` int(2) NOT NULL DEFAULT '1' COMMENT '类型：1、ui自动化  2、接口自动化 、3 、app自动化',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT '' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT '' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COMMENT='t_client';

/*Data for the table `t_global_param` */

insert  into `t_global_param`(`id`,`param_name`,`project_id`,`param_type`,`param_value`,`env_vars`,`type`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (1,'test',1,1,'一个字符串','[{\"envId\":1,\"value\":\"55555\"}]',1,'备注',NULL,'2020-02-04 10:35:06','admin',NULL),(3,'名称',1,2,'12341243',NULL,1,'备注11',NULL,'2019-09-11 16:30:34','admin',NULL),(4,'一个布尔值',1,3,'true',NULL,1,'发阿发',NULL,'2020-02-03 17:15:28','admin',NULL),(10,'domain',1,1,'http://www.baidu.com','[]',1,'',NULL,'2020-02-05 20:09:45','admin',NULL),(12,'domain',1,1,'http://www.baidu.com','[{\"envId\":1,\"value\":\"http://www.rabbittest.xyz\"},{\"envId\":2,\"value\":\"http://www.baidu.com\"}]',2,'',NULL,'2020-02-09 16:00:55','admin',NULL);

/*Table structure for table `t_jmeter_exc_detail` */

DROP TABLE IF EXISTS `t_jmeter_exc_detail`;

CREATE TABLE `t_jmeter_exc_detail` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '接口名称',
  `task_id` bigint(11) DEFAULT NULL COMMENT '任务id',
  `jmeter_id` bigint(11) DEFAULT NULL COMMENT 'jmeter脚本id',
  `type` int(2) DEFAULT NULL COMMENT '1、debug 2、任务执行',
  `meta_validation` text,
  `meta_url` varchar(100) DEFAULT NULL COMMENT '请求url',
  `meta_request_headers` text COMMENT '请求头',
  `meta_request_body` text COMMENT '请求体',
  `meta_request_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '请求时间',
  `meta_cookies` text COMMENT 'cookies',
  `meta_method` varchar(50) DEFAULT NULL COMMENT '请求方式',
  `meta_status_code` varchar(100) DEFAULT NULL COMMENT '响应码',
  `meta_response_headers` text COMMENT '响应头',
  `meta_response_body` text COMMENT '响应体',
  `meta_response_time` bigint(20) DEFAULT NULL COMMENT '耗时，毫秒',
  `meta_extracted_vars` text COMMENT '外部变量',
  `attachment` varchar(100) DEFAULT '' COMMENT '附件',
  `status` int(11) DEFAULT '0' COMMENT '状态 0 成功 1 失败',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_jmeter_exc_detail` */

/*Table structure for table `t_jmeter_script` */

DROP TABLE IF EXISTS `t_jmeter_script`;

CREATE TABLE `t_jmeter_script` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT 'job名称',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `type` int(2) DEFAULT '0' COMMENT '类型 0公共脚本  1业务流脚本',
  `script_content` text COMMENT '脚本内容',
  `data_path` varchar(100) DEFAULT '' COMMENT '数据路径',
  `script_path` varchar(100) DEFAULT '' COMMENT '脚本路径',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'update_by',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update_time',
  `debug_status` int(2) DEFAULT '0' COMMENT '状态 0初始状态 1调试中 2成功 3失败',
  `debug_start_time` timestamp NULL DEFAULT NULL COMMENT 'debug开始时间',
  `debug_end_time` timestamp NULL DEFAULT NULL COMMENT 'debug结束时间',
  `debug_by` varchar(50) DEFAULT 'system' COMMENT 'debug_by',
  `debug_success` int(11) DEFAULT '0' COMMENT 'debug成功数',
  `debug_total` int(11) DEFAULT '0' COMMENT 'debug总数',
  `debug_fail` int(11) DEFAULT '0' COMMENT 'debug失败数',
  `debug_duration` bigint(20) DEFAULT '0' COMMENT 'debug耗时，毫秒',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_jmeter_script` */

insert  into `t_jmeter_script`(`id`,`name`,`project_id`,`type`,`script_content`,`data_path`,`script_path`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`,`debug_status`,`debug_start_time`,`debug_end_time`,`debug_by`,`debug_success`,`debug_total`,`debug_fail`,`debug_duration`) values (28,'test11123',1,0,'<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\n<jmeterTestPlan version=\"1.2\" properties=\"4.0\" jmeter=\"5.0 r1823414\"> \n测试中文，我发现中文也没问题，搞定\n</jmeterTestPlan>\n','result - 副本3.csv,','9999ba15c01b454ca639bbfb5e5a5c4f.zip','214124','system','2019-09-27 10:29:36','admin','2019-09-27 10:29:36',0,NULL,NULL,'system',0,0,0,0);

/*Table structure for table `t_page_element` */

DROP TABLE IF EXISTS `t_page_element`;

CREATE TABLE `t_page_element` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `page_id` bigint(11) DEFAULT NULL,
  `element_name` varchar(50) NOT NULL DEFAULT '' COMMENT '元素名称',
  `by_type` varchar(20) NOT NULL DEFAULT '' COMMENT '定位方式',
  `by_value` varchar(512) DEFAULT '' COMMENT '定位值',
  `is_enable` int(11) DEFAULT '1' COMMENT '1：有效',
  `remark` text COMMENT '备注',
  `create_by` varchar(50) DEFAULT '' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT '' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COMMENT='t_client';

/*Data for the table `t_page_element` */

insert  into `t_page_element`(`id`,`page_id`,`element_name`,`by_type`,`by_value`,`is_enable`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (6,4,'用户名','id','id',1,'','admin','2019-05-29 09:54:18','admin','2019-06-02 14:44:09'),(7,4,'密码','id','password',1,'','admin','2019-05-29 09:55:29','admin','2019-06-02 14:44:10'),(8,4,'登录按钮','id','login-btn',1,'','admin','2019-05-29 09:56:33','admin','2019-06-02 14:44:12'),(10,6,'用户名','id','id',1,'我来备注一下',NULL,'2019-06-04 17:00:57','admin',NULL),(11,6,'密码','id','account',1,'','admin','2019-06-04 17:03:19','admin','2019-06-04 17:03:19'),(12,7,'百度关键字输入框','id','kw',1,'','admin','2019-06-11 11:35:21','admin','2019-06-11 11:35:21'),(13,7,'百度搜索按钮','id','su',1,'','admin','2019-06-11 11:35:52','admin','2019-06-11 11:35:52'),(14,7,'首页tile新闻链接','name','tj_trnews',1,'','admin','2019-12-02 15:53:18','admin','2019-12-02 15:53:18'),(23,7,'百度关键字输入框css','cssSelector','#kw',1,NULL,NULL,'2020-01-06 16:36:23','admin',NULL);

/*Table structure for table `t_plan_business_ui` */

DROP TABLE IF EXISTS `t_plan_business_ui`;

CREATE TABLE `t_plan_business_ui` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `job_id` bigint(11) DEFAULT NULL,
  `business_id` bigint(11) DEFAULT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `is_valid` int(4) DEFAULT '1' COMMENT '1:有效，2：无效',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8;

/*Data for the table `t_plan_business_ui` */

insert  into `t_plan_business_ui`(`id`,`job_id`,`business_id`,`sort`,`is_valid`) values (50,107,1,1,0),(51,107,4,1,1),(52,107,4,0,0),(192,123,1,0,1),(193,123,9,0,1),(194,121,1,0,1);

/*Table structure for table `t_plan_suite_ui` */

DROP TABLE IF EXISTS `t_plan_suite_ui`;

CREATE TABLE `t_plan_suite_ui` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `job_id` bigint(11) DEFAULT NULL,
  `suite_id` bigint(11) DEFAULT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `is_valid` int(4) DEFAULT '1' COMMENT '1:有效，2：无效',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

/*Data for the table `t_plan_suite_ui` */

insert  into `t_plan_suite_ui`(`id`,`job_id`,`suite_id`,`sort`,`is_valid`) values (42,128,8,0,1),(54,127,8,0,1);

/*Table structure for table `t_project_page` */

DROP TABLE IF EXISTS `t_project_page`;

CREATE TABLE `t_project_page` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `project_id` bigint(11) NOT NULL DEFAULT '-1' COMMENT 'projectId',
  `page_name` varchar(50) NOT NULL DEFAULT '' COMMENT '页面名称',
  `is_enable` int(11) DEFAULT '1' COMMENT '1：有效',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT '' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT '' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COMMENT='t_client';

/*Data for the table `t_project_page` */

insert  into `t_project_page`(`id`,`project_id`,`page_name`,`is_enable`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (4,1,'登录',1,'true',NULL,'2019-05-31 14:48:00','admin','2019-12-27 12:53:20'),(6,4,'登陆',1,'备注',NULL,'2019-06-03 07:26:20','admin','2019-06-03 22:29:48'),(7,1,'百度页面',1,'百度页面',NULL,'2019-06-04 20:08:44','admin','2019-06-11 11:34:35');

/*Table structure for table `t_step_ui` */

DROP TABLE IF EXISTS `t_step_ui`;

CREATE TABLE `t_step_ui` (
  `id` bigint(18) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL COMMENT '描述',
  `action_type` varchar(64) DEFAULT '' COMMENT '关键字分类',
  `action` varchar(64) NOT NULL DEFAULT '' COMMENT '关键字',
  `action_remark` text COMMENT '关键字描述',
  `testcase_id` bigint(18) NOT NULL,
  `page_id` bigint(18) DEFAULT '0',
  `element_id` bigint(18) DEFAULT NULL,
  `path` varchar(64) DEFAULT NULL COMMENT '元素',
  `option_data` varchar(128) DEFAULT NULL,
  `type` int(1) DEFAULT NULL COMMENT '1: UI 2: APP 3:接口',
  `create_by` varchar(64) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_by` varchar(64) DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sort` bigint(8) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=478 DEFAULT CHARSET=utf8;

/*Data for the table `t_step_ui` */

insert  into `t_step_ui`(`id`,`name`,`action_type`,`action`,`action_remark`,`testcase_id`,`page_id`,`element_id`,`path`,`option_data`,`type`,`create_by`,`create_time`,`update_by`,`update_time`,`sort`) values (365,'打开登录链接',NULL,'openURL',NULL,6,-1,NULL,NULL,'http://cm.midea.com/beta/signin.html?redirect_url=http://cm.midea.com/beta/index.html',1,'admin','2019-05-29 09:58:36','admin','2019-05-29 09:58:36',0),(366,'输入账号',NULL,'input',NULL,6,6,10,NULL,'tcadmin',1,'admin','2019-05-29 09:58:36','admin','2019-05-29 09:58:36',0),(367,'输入密码',NULL,'input',NULL,6,6,10,NULL,'@midea2014@',1,'admin','2019-05-29 09:58:36','admin','2019-05-29 09:58:36',0),(368,'点击登录',NULL,'click',NULL,6,6,10,NULL,NULL,1,'admin','2019-05-29 09:58:36','admin','2019-05-29 09:58:36',0),(471,'进入百度','uiAction','openURL','描述：打开网页\n元素：必填\n操作数据：需要打开的网址',5,-1,NULL,NULL,'https://www.baidu.com/',1,'admin','2019-05-20 17:49:23','admin','2019-05-27 14:12:26',0),(472,'输入关键字','uiAction','input','元素：无\n操作数据：需要向元素输入的值',5,7,12,NULL,'自动化测试',1,'admin','2019-05-28 21:10:44','admin','2019-05-28 21:10:44',1),(473,'点击搜索按钮','uiAction','click','元素：必填\n操作数据：无',5,7,13,NULL,NULL,1,'admin','2019-05-28 21:10:44','admin','2019-05-28 21:10:44',2),(474,'等待3秒','uiAction','sleep','描述：固定等待时间\n元素：无\n操作数据：等待的毫秒值',5,0,NULL,NULL,'3000',1,'admin','2019-06-18 23:29:19','admin','2019-06-18 23:29:19',3),(475,'输入关键字','uiAction','input','描述：向input框输入值\n元素：无\n操作数据：需要向元素输入的值',5,7,12,NULL,'测试一下',1,'admin','2019-06-19 20:44:03','admin','2019-06-19 20:44:03',4),(476,'点击搜索按钮','uiAction','click','描述：点击元素\n元素：必填\n操作数据：无',5,7,13,NULL,NULL,1,'admin','2019-06-19 20:50:44','admin','2019-06-19 20:50:44',5),(477,'等待3秒','uiAction','sleep','描述：固定等待时间\n元素：无\n操作数据：等待的毫秒值',5,0,NULL,NULL,'3000',1,'admin','2019-06-19 20:44:03','admin','2019-06-19 20:44:03',6);

/*Table structure for table `t_step_ui_new` */

DROP TABLE IF EXISTS `t_step_ui_new`;

CREATE TABLE `t_step_ui_new` (
  `id` bigint(18) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL COMMENT '描述',
  `action_type` varchar(64) DEFAULT '' COMMENT '关键字分类',
  `action` varchar(64) NOT NULL DEFAULT '' COMMENT '关键字',
  `action_remark` text COMMENT '关键字描述',
  `testcase_id` bigint(18) NOT NULL,
  `page_id` bigint(18) DEFAULT '0',
  `element_id` bigint(18) DEFAULT NULL COMMENT '元素id或数据库id',
  `option_data` varchar(128) DEFAULT NULL,
  `type` int(1) DEFAULT NULL COMMENT '1: UI 2: APP 3:接口',
  `create_by` varchar(64) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_by` varchar(64) DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sort` bigint(8) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

/*Data for the table `t_step_ui_new` */

insert  into `t_step_ui_new`(`id`,`name`,`action_type`,`action`,`action_remark`,`testcase_id`,`page_id`,`element_id`,`option_data`,`type`,`create_by`,`create_time`,`update_by`,`update_time`,`sort`) values (37,'输入账号','uiAction','input','描述：向input框输入值\n元素：无\n操作数据：需要向元素输入的值',10,4,6,'${账号}',1,'admin','2019-12-09 20:09:46','admin','2019-12-09 20:09:46',0),(38,'输入密码','uiAction','input','描述：向input框输入值\n元素：无\n操作数据：需要向元素输入的值',10,4,7,'${密码}',1,'admin','2019-12-09 20:09:46','admin','2019-12-09 20:09:46',1),(39,'点击登陆按钮','uiAction','click','描述：点击元素\n元素：必填\n操作数据：无',10,4,8,NULL,1,'admin','2019-12-09 20:09:46','admin','2019-12-09 20:09:46',2),(40,'等待登陆按钮消失','uiAction2','waitForElementDisappear','描述：等待元素是否在设定的时间内消失\n元素：必填\n操作数据：等待的时间（秒）,如果不填，默认60S',10,4,8,'60',1,'admin','2019-12-09 20:09:46','admin','2019-12-09 20:09:46',3),(57,'打开百度页面','uiAction','openURL','描述：打开网页\n元素：必填\n操作数据：需要打开的网址',22,NULL,NULL,'${百度ur}',1,'admin','2020-01-06 11:47:16','admin','2020-01-06 11:47:16',0),(58,'输入查询条件','uiAction','input','描述：向input框输入值\n元素：无\n操作数据：需要向元素输入的值',22,7,12,'asdfasdfasdf',1,'admin','2020-01-06 12:46:04','admin','2020-01-06 12:46:04',1),(59,'点击查询','uiAction','click','描述：点击元素\n元素：必填\n操作数据：无',22,7,13,NULL,1,'admin','2020-01-12 22:19:58','admin','2020-01-12 22:19:58',2),(61,'测试新的输入','uiAction8','inputJsValue','描述：使用js给input框赋值\n元素：需要赋值的input框，定位方式必需是cssselector\n操作数据：需要赋值的数据',22,7,12,'5555',1,'admin','2020-01-15 20:51:57','admin','2020-01-15 20:51:57',3),(64,'等待消失','uiAction2','waitForElementDisappear','描述：等待元素是否在设定的时间内消失\n元素：必填\n操作数据：等待的时间（秒）,如果不填，默认60S',22,7,14,'20',1,'admin','2020-01-16 10:03:19','admin','2020-01-16 10:03:19',4);

/*Table structure for table `t_suite_case_ui` */

DROP TABLE IF EXISTS `t_suite_case_ui`;

CREATE TABLE `t_suite_case_ui` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `suite_id` bigint(11) DEFAULT NULL,
  `case_id` bigint(11) DEFAULT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `is_valid` int(4) DEFAULT '1' COMMENT '1:有效，2：无效',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `t_suite_case_ui` */

insert  into `t_suite_case_ui`(`id`,`suite_id`,`case_id`,`sort`,`is_valid`) values (33,8,22,0,1),(34,8,22,1,1);

/*Table structure for table `t_test_business_ui_log` */

DROP TABLE IF EXISTS `t_test_business_ui_log`;

CREATE TABLE `t_test_business_ui_log` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `business_id` bigint(11) NOT NULL,
  `business_name` varchar(150) NOT NULL DEFAULT '' COMMENT '业务名称',
  `plan_id` bigint(50) NOT NULL COMMENT '计划id',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '执行状态 0成功 1失败 2跳过',
  `case_total_count` int(8) NOT NULL DEFAULT '0' COMMENT '用例总数',
  `case_succ_count` int(8) DEFAULT '0' COMMENT '成功数',
  `case_fail_count` int(8) DEFAULT '0' COMMENT '失败数',
  `case_skip_count` int(8) DEFAULT '0' COMMENT '未执行用例',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化业务流日志';

/*Data for the table `t_test_business_ui_log` */

insert  into `t_test_business_ui_log`(`id`,`business_id`,`business_name`,`plan_id`,`project_id`,`status`,`case_total_count`,`case_succ_count`,`case_fail_count`,`case_skip_count`,`end_time`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (8,1,'测试一下百度',8,1,0,1,1,0,0,'2019-09-03 14:47:23','','system','2019-09-03 14:47:05','system','2019-09-03 14:47:25'),(9,1,'测试一下百度',9,1,0,1,1,0,0,'2019-09-03 14:56:04','','system','2019-09-03 14:55:46','system','2019-09-03 14:56:06'),(10,1,'测试一下百度',10,1,1,2,1,1,0,'2019-09-03 17:46:32','','system','2019-09-03 17:45:56','system','2019-09-03 17:46:34'),(11,1,'测试一下百度',11,1,1,2,1,1,0,'2019-09-03 17:49:45','','system','2019-09-03 17:49:07','system','2019-09-03 17:49:47'),(14,1,'测试一下百度',14,1,1,2,0,2,0,'2019-09-09 13:46:29','','system','2019-09-09 13:46:03','system','2019-09-09 13:46:30');

/*Table structure for table `t_test_case_ui_log` */

DROP TABLE IF EXISTS `t_test_case_ui_log`;

CREATE TABLE `t_test_case_ui_log` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `plan_id` bigint(11) NOT NULL COMMENT '计划id',
  `case_id` bigint(11) NOT NULL,
  `case_name` varchar(150) NOT NULL DEFAULT '' COMMENT '用例名称',
  `business_id` bigint(50) NOT NULL COMMENT '业务流id',
  `business_log_id` bigint(11) DEFAULT NULL COMMENT '测试业务日志id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '执行状态 0成功 1失败 2跳过',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化用例日志';

/*Data for the table `t_test_case_ui_log` */

insert  into `t_test_case_ui_log`(`id`,`plan_id`,`case_id`,`case_name`,`business_id`,`business_log_id`,`status`,`end_time`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (10,8,5,'百度一下',1,8,0,'2019-09-03 14:47:23','','system','2019-09-03 14:47:11','system','2019-09-03 14:47:24'),(11,9,5,'百度一下',1,9,0,'2019-09-03 14:56:04','','system','2019-09-03 14:55:52','system','2019-09-03 14:56:05'),(12,10,5,'百度一下',1,10,0,'2019-09-03 17:46:15','','system','2019-09-03 17:46:03','system','2019-09-03 17:46:16'),(13,10,1,'登陆',1,10,1,'2019-09-03 17:46:32','','system','2019-09-03 17:46:16','system','2019-09-03 17:46:33'),(14,11,5,'百度一下',1,11,0,'2019-09-03 17:49:29','','system','2019-09-03 17:49:12','system','2019-09-03 17:49:30'),(15,11,1,'登陆',1,11,1,'2019-09-03 17:49:45','','system','2019-09-03 17:49:30','system','2019-09-03 17:49:46'),(17,14,5,'百度一下',1,14,1,'2019-09-09 13:46:13','','system','2019-09-09 13:46:11','system','2019-09-09 13:46:13'),(18,14,1,'登陆',1,14,1,'2019-09-09 13:46:29','','system','2019-09-09 13:46:13','system','2019-09-09 13:46:29');

/*Table structure for table `t_test_case_ui_new_log` */

DROP TABLE IF EXISTS `t_test_case_ui_new_log`;

CREATE TABLE `t_test_case_ui_new_log` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `plan_log_id` bigint(11) NOT NULL COMMENT '计划日志id',
  `suite_log_id` bigint(11) NOT NULL COMMENT '测试业务日志id',
  `suite_id` bigint(11) DEFAULT NULL,
  `suite_name` varchar(150) DEFAULT NULL,
  `case_id` bigint(11) NOT NULL,
  `case_name` varchar(150) NOT NULL DEFAULT '' COMMENT '用例名称',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '执行状态 0成功 1失败 2跳过',
  `end_time` datetime(3) DEFAULT NULL COMMENT '结束时间',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT 'createTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化用例日志';

/*Data for the table `t_test_case_ui_new_log` */

insert  into `t_test_case_ui_new_log`(`id`,`plan_log_id`,`suite_log_id`,`suite_id`,`suite_name`,`case_id`,`case_name`,`status`,`end_time`,`remark`,`create_by`,`create_time`) values (79,55,50,8,'随便建一个用例集',1,'百度关键字',0,'2019-12-18 18:58:03.384','','system','2019-12-18 18:57:53.322'),(80,56,51,8,'随便建一个用例集',1,'百度关键字',0,'2019-12-18 20:35:39.871','','system','2019-12-18 20:35:30.825'),(83,60,54,8,'随便建一个用例集',1,'百度关键字',0,'2019-12-19 16:49:06.295','','system','2019-12-19 16:48:52.062'),(84,71,55,8,'随便建一个用例集',22,'新建用例',0,'2020-01-12 22:25:12.681','','system','2020-01-12 22:25:01.572');

/*Table structure for table `t_test_databese` */

DROP TABLE IF EXISTS `t_test_databese`;

CREATE TABLE `t_test_databese` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '数据库名称',
  `connect_url` varchar(500) NOT NULL COMMENT '数据库连接',
  `username` varchar(100) NOT NULL COMMENT '用户',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '类型 0 mysql  1 oracle',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '状态 0正常 1失效',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_test_databese` */

insert  into `t_test_databese`(`id`,`name`,`connect_url`,`username`,`password`,`project_id`,`type`,`status`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (1,'测试数据库','jdbc:mysql://192.168.233.131:3306/rabbit-v2?useUnicode=true&characterEncoding=utf-8&allowMultiQueries=true&useSSL=false&serverTimezone=UTC','root','QEwd/DWmy/4yGncCqBofQQ==',1,0,1,'备注',NULL,'2020-01-23 09:12:39','admin',NULL);

/*Table structure for table `t_test_interface` */

DROP TABLE IF EXISTS `t_test_interface`;

CREATE TABLE `t_test_interface` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '接口名称',
  `business_id` bigint(11) DEFAULT NULL COMMENT '业务流id',
  `business_name` varchar(100) DEFAULT NULL COMMENT '业务流名称',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '类型 0公共接口  业务流接口',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '状态 0启用 1禁用',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `sort` int(10) DEFAULT '0' COMMENT '排序',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_test_interface` */

/*Table structure for table `t_test_plan_ui_log` */

DROP TABLE IF EXISTS `t_test_plan_ui_log`;

CREATE TABLE `t_test_plan_ui_log` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '任务名称',
  `job_id` bigint(8) NOT NULL DEFAULT '0' COMMENT 'jobid',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '状态 0未执行 1执行中 2执行完成 3任务超时中断 4连接客户端失败, 5执行失败',
  `business_total_count` int(8) DEFAULT '0' COMMENT '业务流总数',
  `business_succ_count` int(8) NOT NULL DEFAULT '0' COMMENT '成功数',
  `business_fail_count` int(8) DEFAULT '0' COMMENT '失败数',
  `business_skip_count` int(8) DEFAULT '0' COMMENT '未执行用例',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'createTime',
  `update_by` varchar(50) DEFAULT 'system' COMMENT 'updateBy',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'updateTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_test_plan_ui_log` */

insert  into `t_test_plan_ui_log`(`id`,`name`,`job_id`,`project_id`,`status`,`business_total_count`,`business_succ_count`,`business_fail_count`,`business_skip_count`,`end_time`,`remark`,`create_by`,`create_time`,`update_by`,`update_time`) values (8,'测试一下本地客户端百度_190903144704',121,1,2,1,1,0,0,'2019-09-03 14:47:24','执行完毕','system','2019-09-03 14:47:05','system','2019-09-03 14:47:25'),(9,'测试一下本地客户端百度_190903145545',121,1,2,1,1,0,0,'2019-09-03 14:56:05','执行完毕','system','2019-09-03 14:55:46','system','2019-09-03 14:56:06'),(10,'测试一下本地客户端百度_190903174554',121,1,5,1,0,1,0,'2019-09-03 17:46:33','执行结果失败','system','2019-09-03 17:45:56','system','2019-09-03 17:46:34'),(11,'测试一下本地客户端百度_190903174905',121,1,5,1,0,1,0,'2019-09-03 17:49:46','执行结果失败','system','2019-09-03 17:49:07','system','2019-09-03 17:49:47'),(14,'测试一下本地客户端百度_190909134602',121,1,5,1,0,1,0,'2019-09-09 13:46:30','执行结果失败','system','2019-09-09 13:46:03','system','2019-09-09 13:46:30'),(15,'测试一下本地客户端百度_200107205201',121,1,4,1,0,0,1,'2020-01-07 20:52:01','连接客户端【127.0.0.1:8879】失败','system','2020-01-07 20:52:01','system','2020-01-07 20:52:01'),(16,'测试一下本地客户端百度_200107205211',121,1,4,1,0,0,1,'2020-01-07 20:52:12','连接客户端【127.0.0.1:8879】失败','system','2020-01-07 20:52:11','system','2020-01-07 20:52:11'),(17,'测试一下本地客户端百度_200107225316',121,1,4,1,0,0,1,'2020-01-07 22:53:16','连接客户端【127.0.0.1:8879】失败','system','2020-01-07 22:53:16','system','2020-01-07 22:53:16');

/*Table structure for table `t_test_plan_ui_new_log` */

DROP TABLE IF EXISTS `t_test_plan_ui_new_log`;

CREATE TABLE `t_test_plan_ui_new_log` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '任务名称',
  `job_id` bigint(8) NOT NULL DEFAULT '0' COMMENT 'jobid',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '状态 0未执行 1执行中 2执行完成 3任务超时中断 4连接客户端失败, 5执行失败',
  `suite_total_count` int(8) DEFAULT '0' COMMENT '业务流总数',
  `suite_succ_count` int(8) NOT NULL DEFAULT '0' COMMENT '成功数',
  `suite_fail_count` int(8) DEFAULT '0' COMMENT '失败数',
  `end_time` datetime(3) DEFAULT NULL COMMENT '结束时间',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp(3) NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT 'create_time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化测试计划日志';

/*Data for the table `t_test_plan_ui_new_log` */

insert  into `t_test_plan_ui_new_log`(`id`,`name`,`job_id`,`project_id`,`status`,`suite_total_count`,`suite_succ_count`,`suite_fail_count`,`end_time`,`remark`,`create_by`,`create_time`) values (55,'第一个新任务',127,1,2,1,1,0,'2019-12-18 18:58:03.428','执行完毕','system','2019-12-18 18:57:53.129'),(56,'第一个新任务',127,1,2,1,1,0,'2019-12-18 20:35:39.935','执行完毕','system','2019-12-18 20:35:28.807'),(60,'第一个新任务',127,1,2,1,1,0,'2019-12-19 16:49:06.343','执行完毕','system','2019-12-19 16:48:51.678'),(70,'第一个新任务',127,1,4,1,0,0,'2020-01-12 22:24:50.786','连接客户端【127.0.0.1:8999】失败','system','2020-01-12 22:24:48.700'),(71,'第一个新任务',127,1,2,1,1,0,'2020-01-12 22:25:12.741','执行完毕','system','2020-01-12 22:25:01.079');

/*Table structure for table `t_test_step_ui_log` */

DROP TABLE IF EXISTS `t_test_step_ui_log`;

CREATE TABLE `t_test_step_ui_log` (
  `id` bigint(8) NOT NULL AUTO_INCREMENT COMMENT '日志ID',
  `plan_id` bigint(11) NOT NULL COMMENT '计划id',
  `case_log_id` bigint(11) DEFAULT NULL,
  `step_id` bigint(8) NOT NULL COMMENT '用例执行ID',
  `step_name` varchar(50) NOT NULL COMMENT '任务ID',
  `case_id` bigint(8) NOT NULL,
  `log_detail` text NOT NULL COMMENT '日志明细',
  `status` int(2) DEFAULT '0' COMMENT '执行状态 0成功 1失败 2跳过',
  `end_time` datetime DEFAULT NULL COMMENT '结束时间',
  `end_flag` int(2) DEFAULT '0' COMMENT '日志用例步骤',
  `imgname` varchar(500) DEFAULT NULL COMMENT 'UI自动化自动截图地址',
  `create_by` varchar(50) DEFAULT 'system',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(50) DEFAULT 'system',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `task_case_id` (`step_id`),
  KEY `task_id` (`step_name`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8 COMMENT='用例日志明细';

/*Data for the table `t_test_step_ui_log` */

insert  into `t_test_step_ui_log`(`id`,`plan_id`,`case_log_id`,`step_id`,`step_name`,`case_id`,`log_detail`,`status`,`end_time`,`end_flag`,`imgname`,`create_by`,`create_time`,`update_by`,`update_time`) values (56,8,10,471,'进入百度',5,'打开URL[https://www.baidu.com/]成功',0,'2019-09-03 14:47:11',0,'UI\\2019\\09\\03\\8\\6f5a7095fa1e4834b07085be2b58689b.png','system','2019-09-03 14:47:10','system','2019-09-03 14:47:12'),(57,8,10,472,'输入关键字',5,'向元素[id;;kw]输入数据[自动化测试]成功',0,'2019-09-03 14:47:12',0,'UI\\2019\\09\\03\\8\\c14f727d4f7d43fb8a02f5dcaea59408.png','system','2019-09-03 14:47:11','system','2019-09-03 14:47:12'),(58,8,10,473,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 14:47:13',0,'UI\\2019\\09\\03\\8\\34dae4cc25c34388b41e329ef34600c8.png','system','2019-09-03 14:47:12','system','2019-09-03 14:47:14'),(59,8,10,474,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 14:47:17',0,'UI\\2019\\09\\03\\8\\e238716999bb49e49f38625aee7cf613.png','system','2019-09-03 14:47:13','system','2019-09-03 14:47:18'),(60,8,10,475,'输入关键字',5,'向元素[id;;kw]输入数据[测试一下]成功',0,'2019-09-03 14:47:18',0,'UI\\2019\\09\\03\\8\\a12993965de8428098edb5d6b4a97199.png','system','2019-09-03 14:47:17','system','2019-09-03 14:47:19'),(61,8,10,476,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 14:47:19',0,'UI\\2019\\09\\03\\8\\81dae2577ab94b9bb5fc768cabcf9864.png','system','2019-09-03 14:47:18','system','2019-09-03 14:47:20'),(62,8,10,477,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 14:47:23',0,'UI\\2019\\09\\03\\8\\1161186f7d99434284ee2b010c5dad10.png','system','2019-09-03 14:47:19','system','2019-09-03 14:47:24'),(63,9,11,471,'进入百度',5,'打开URL[https://www.baidu.com/]成功',0,'2019-09-03 14:55:52',0,'UI\\2019\\09\\03\\9\\2048098df5d242a9ae9fdfcf787cc2cd.png','system','2019-09-03 14:55:51','system','2019-09-03 14:55:53'),(64,9,11,472,'输入关键字',5,'向元素[id;;kw]输入数据[自动化测试]成功',0,'2019-09-03 14:55:53',0,'UI\\2019\\09\\03\\9\\67613430e00c4c8d9f16feb8caa1fab7.png','system','2019-09-03 14:55:52','system','2019-09-03 14:55:54'),(65,9,11,473,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 14:55:55',0,'UI\\2019\\09\\03\\9\\a5e4159731c44521bdfb55ba5790aee3.png','system','2019-09-03 14:55:53','system','2019-09-03 14:55:56'),(66,9,11,474,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 14:55:58',0,'UI\\2019\\09\\03\\9\\9cdd0f86efe74da2bbbe4f04e10013f5.png','system','2019-09-03 14:55:55','system','2019-09-03 14:55:59'),(67,9,11,475,'输入关键字',5,'向元素[id;;kw]输入数据[测试一下]成功',0,'2019-09-03 14:55:59',0,'UI\\2019\\09\\03\\9\\0ab055c1775648ea85d2958fff0327f3.png','system','2019-09-03 14:55:58','system','2019-09-03 14:56:00'),(68,9,11,476,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 14:56:01',0,'UI\\2019\\09\\03\\9\\6d7119cb394f474cbe15cdc8ad8bb13f.png','system','2019-09-03 14:55:59','system','2019-09-03 14:56:02'),(69,9,11,477,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 14:56:04',0,'UI\\2019\\09\\03\\9\\72bc3a49b5004e7b83e452fcf218ad3c.png','system','2019-09-03 14:56:01','system','2019-09-03 14:56:05'),(70,10,12,471,'进入百度',5,'打开URL[https://www.baidu.com/]成功',0,'2019-09-03 17:46:03',0,'UI\\2019\\09\\03\\10\\8ca10f2139184d4d9115087d425da56c.png','system','2019-09-03 17:46:02','system','2019-09-03 17:46:04'),(71,10,12,472,'输入关键字',5,'向元素[id;;kw]输入数据[自动化测试]成功',0,'2019-09-03 17:46:04',0,'UI\\2019\\09\\03\\10\\496a608122614a4dbfd2c905b20cf73e.png','system','2019-09-03 17:46:03','system','2019-09-03 17:46:05'),(72,10,12,473,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 17:46:06',0,'UI\\2019\\09\\03\\10\\461518d84262482ebcb874ea2632976d.png','system','2019-09-03 17:46:04','system','2019-09-03 17:46:07'),(73,10,12,474,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 17:46:09',0,'UI\\2019\\09\\03\\10\\6bac156c72ee444b926f47b93b400ed4.png','system','2019-09-03 17:46:06','system','2019-09-03 17:46:10'),(74,10,12,475,'输入关键字',5,'向元素[id;;kw]输入数据[测试一下]成功',0,'2019-09-03 17:46:10',0,'UI\\2019\\09\\03\\10\\85cff2f5e0bc44ebbcd29648145a5dc8.png','system','2019-09-03 17:46:09','system','2019-09-03 17:46:11'),(75,10,12,476,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 17:46:12',0,'UI\\2019\\09\\03\\10\\5fa933e64cdc4fd6bf65200de39ab42a.png','system','2019-09-03 17:46:10','system','2019-09-03 17:46:13'),(76,10,12,477,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 17:46:15',0,'UI\\2019\\09\\03\\10\\065dba90d9a5491ea607c61201e34f5d.png','system','2019-09-03 17:46:12','system','2019-09-03 17:46:16'),(77,10,13,358,'打开网页',1,'打开URL[http://www.baidu.com]成功',0,'2019-09-03 17:46:16',0,'UI\\2019\\09\\03\\10\\6adca40cd6d34f339bc420bbcc96ad74.png','system','2019-09-03 17:46:15','system','2019-09-03 17:46:17'),(78,10,13,359,'输入账号',1,'执行关键字【input】异常:没有找到该元素',1,'2019-09-03 17:46:32',0,'UI\\2019\\09\\03\\10\\4c9e7177393a4462b214369aeacf3c1e.png','system','2019-09-03 17:46:16','system','2019-09-03 17:46:33'),(79,10,13,360,' 输入密码',1,'由于上一步失败，此步骤不执行',2,'2019-09-03 17:46:32',0,NULL,'system','2019-09-03 17:46:32','system','2019-09-03 17:46:33'),(80,11,14,471,'进入百度',5,'打开URL[https://www.baidu.com/]成功',0,'2019-09-03 17:49:12',0,'UI\\2019\\09\\03\\11\\0ac95bc600574eb0967d44a682b1e3c6.png','system','2019-09-03 17:49:11','system','2019-09-03 17:49:13'),(81,11,14,472,'输入关键字',5,'向元素[id;;kw]输入数据[自动化测试]成功',0,'2019-09-03 17:49:13',0,'UI\\2019\\09\\03\\11\\c6eca1c7560d4e1abda5084ed68b18a1.png','system','2019-09-03 17:49:12','system','2019-09-03 17:49:14'),(82,11,14,473,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 17:49:14',0,'UI\\2019\\09\\03\\11\\0aa36ae011424958be4e525a20814596.png','system','2019-09-03 17:49:13','system','2019-09-03 17:49:15'),(83,11,14,474,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 17:49:18',0,'UI\\2019\\09\\03\\11\\9b0c632a9793411da47567a5686e6d98.png','system','2019-09-03 17:49:14','system','2019-09-03 17:49:19'),(84,11,14,475,'输入关键字',5,'向元素[id;;kw]输入数据[测试一下]成功',0,'2019-09-03 17:49:19',0,'UI\\2019\\09\\03\\11\\a15fcf4f265b4010a37d5cc6b77fce73.png','system','2019-09-03 17:49:18','system','2019-09-03 17:49:20'),(85,11,14,476,'点击搜索按钮',5,'点击元素[id;;su]成功',0,'2019-09-03 17:49:25',0,'UI\\2019\\09\\03\\11\\be025b5ee9814e419e007c77d765dd03.png','system','2019-09-03 17:49:19','system','2019-09-03 17:49:26'),(86,11,14,477,'等待3秒',5,'等待[3000]毫秒成功',0,'2019-09-03 17:49:29',0,'UI\\2019\\09\\03\\11\\f6987935256d46da9e3aa6c9009f5312.png','system','2019-09-03 17:49:26','system','2019-09-03 17:49:30'),(87,11,15,358,'打开网页',1,'打开URL[http://www.baidu.com]成功',0,'2019-09-03 17:49:30',0,'UI\\2019\\09\\03\\11\\34d3446daef644dab7ae62da1e8a912f.png','system','2019-09-03 17:49:29','system','2019-09-03 17:49:31'),(88,11,15,359,'输入账号',1,'执行关键字【input】异常:没有找到该元素',1,'2019-09-03 17:49:45',0,'UI\\2019\\09\\03\\11\\1aee8b07a0474102b4e3ce60e2fd18bb.png','system','2019-09-03 17:49:30','system','2019-09-03 17:49:46'),(89,11,15,360,' 输入密码',1,'由于上一步失败，此步骤不执行',2,'2019-09-03 17:49:45',0,NULL,'system','2019-09-03 17:49:45','system','2019-09-03 17:49:46'),(95,14,17,471,'进入百度',5,'打开URL[https://www.baidu.com/]成功',0,'2019-09-09 13:46:12',0,'UI\\2019\\09\\09\\14\\7d0038246cab44fa8f2e04d9f1ddaa5f.png','system','2019-09-09 13:46:10','system','2019-09-09 13:46:12'),(96,14,17,472,'输入关键字',5,'向元素[id;;kw]输入数据[自动化测试]成功',0,'2019-09-09 13:46:12',0,'UI\\2019\\09\\09\\14\\716b80a47f8646fea3925913e22fa5e9.png','system','2019-09-09 13:46:12','system','2019-09-09 13:46:13'),(97,14,17,473,'点击搜索按钮',5,'获取关键字【click】异常:未知异常:Serialized class org.openqa.selenium.chrome.ChromeDriver must implement java.io.Serializable',1,'2019-09-09 13:46:13',0,'UI\\2019\\09\\09\\14\\657c77ba959148e19722dfb73dd0abfa.png','system','2019-09-09 13:46:12','system','2019-09-09 13:46:13'),(98,14,17,474,'等待3秒',5,'由于上一步失败，此步骤不执行',2,'2019-09-09 13:46:13',0,NULL,'system','2019-09-09 13:46:13','system','2019-09-09 13:46:13'),(99,14,17,475,'输入关键字',5,'由于上一步失败，此步骤不执行',2,'2019-09-09 13:46:13',0,NULL,'system','2019-09-09 13:46:13','system','2019-09-09 13:46:13'),(100,14,17,476,'点击搜索按钮',5,'由于上一步失败，此步骤不执行',2,'2019-09-09 13:46:13',0,NULL,'system','2019-09-09 13:46:13','system','2019-09-09 13:46:13'),(101,14,17,477,'等待3秒',5,'由于上一步失败，此步骤不执行',2,'2019-09-09 13:46:13',0,NULL,'system','2019-09-09 13:46:13','system','2019-09-09 13:46:13'),(102,14,18,358,'打开网页',1,'打开URL[http://www.baidu.com]成功',0,'2019-09-09 13:46:14',0,'UI\\2019\\09\\09\\14\\275516f71fbe49d28250ca4d2258c2cc.png','system','2019-09-09 13:46:13','system','2019-09-09 13:46:14'),(103,14,18,359,'输入账号',1,'执行关键字【input】异常:没有找到该元素',1,'2019-09-09 13:46:29',0,'UI\\2019\\09\\09\\14\\7d658b8cfc914b60baa91ba66956b127.png','system','2019-09-09 13:46:14','system','2019-09-09 13:46:29'),(104,14,18,360,' 输入密码',1,'由于上一步失败，此步骤不执行',2,'2019-09-09 13:46:29',0,NULL,'system','2019-09-09 13:46:29','system','2019-09-09 13:46:29');

/*Table structure for table `t_test_step_ui_new_log` */

DROP TABLE IF EXISTS `t_test_step_ui_new_log`;

CREATE TABLE `t_test_step_ui_new_log` (
  `id` bigint(8) NOT NULL AUTO_INCREMENT COMMENT '日志ID',
  `plan_job_id` bigint(11) NOT NULL COMMENT '计划日志id',
  `case_log_id` bigint(11) NOT NULL,
  `step_id` bigint(8) NOT NULL COMMENT '用例执行ID',
  `step_name` varchar(50) NOT NULL COMMENT '任务ID',
  `case_id` bigint(8) NOT NULL,
  `case_name` varchar(50) DEFAULT NULL,
  `log_detail` text NOT NULL COMMENT '日志明细',
  `status` int(2) DEFAULT '0' COMMENT '执行状态 0成功 1失败 2跳过',
  `type` int(2) DEFAULT '1' COMMENT '1.用例步骤 2.业务流步骤',
  `end_time` datetime(3) DEFAULT NULL COMMENT '结束时间',
  `end_flag` int(2) DEFAULT '0' COMMENT '日志用例步骤',
  `imgname` varchar(500) DEFAULT NULL COMMENT 'UI自动化自动截图地址',
  `create_by` varchar(50) DEFAULT 'system',
  `create_time` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `task_case_id` (`step_id`),
  KEY `task_id` (`step_name`)
) ENGINE=InnoDB AUTO_INCREMENT=393 DEFAULT CHARSET=utf8 COMMENT='用例日志明细';

/*Data for the table `t_test_step_ui_new_log` */

insert  into `t_test_step_ui_new_log`(`id`,`plan_job_id`,`case_log_id`,`step_id`,`step_name`,`case_id`,`case_name`,`log_detail`,`status`,`type`,`end_time`,`end_flag`,`imgname`,`create_by`,`create_time`) values (370,55,79,1,'打开百度页面',1,'百度关键字','打开URL[https://www.baidu.com/]成功',0,1,'2019-12-18 18:58:00.319',0,'UI\\report\\55\\b0f56aa46ca443d7a7c8329ff96aa3f9.png','system','2019-12-18 18:57:58.604'),(371,55,79,28,'输入关键字',1,'百度关键字','向元素[id;;kw]输入数据[测试一下]成功',0,1,'2019-12-18 18:58:00.969',0,'UI\\report\\55\\ed065603622d43f8b192b38d88111a17.png','system','2019-12-18 18:58:00.328'),(372,55,79,29,'点击搜索按钮',1,'百度关键字','点击元素[id;;su]成功',0,1,'2019-12-18 18:58:01.607',0,'UI\\report\\55\\52ebed2c66544edca4e865f2787e67d5.png','system','2019-12-18 18:58:00.978'),(373,55,79,35,'设置一个变量',1,'百度关键字','缓存成功,变量为：测试变量，数据为：测试变量搜索',0,1,'2019-12-18 18:58:02.474',0,'UI\\report\\55\\61f997b2437840399c84677ff807e810.png','system','2019-12-18 18:58:01.614'),(374,56,80,1,'打开百度页面',1,'百度关键字','打开URL[https://www.baidu.com/]成功',0,1,'2019-12-18 20:35:37.140',0,'UI/report/56/1776130fbe854ea1ae09b01f18ca56fc.png','system','2019-12-18 20:35:36.153'),(375,56,80,28,'输入关键字',1,'百度关键字','向元素[id;;kw]输入数据[测试一下]成功',0,1,'2019-12-18 20:35:37.875',0,'UI/report/56/97a272907b16496ba4241316a02f006f.png','system','2019-12-18 20:35:37.151'),(376,56,80,29,'点击搜索按钮',1,'百度关键字','点击元素[id;;su]成功',0,1,'2019-12-18 20:35:38.558',0,'UI/report/56/35b7cfdffa654ad2bcdb1b304cbf1c3e.png','system','2019-12-18 20:35:37.885'),(377,56,80,35,'设置一个变量',1,'百度关键字','缓存成功,变量为：测试变量，数据为：测试变量搜索',0,1,'2019-12-18 20:35:39.116',0,'UI/report/56/5be27a8d095047a4a71f5fff8664362e.png','system','2019-12-18 20:35:38.566'),(386,60,83,1,'打开百度页面',1,'百度关键字','打开URL[https://www.baidu.com/]成功',0,1,'2019-12-19 16:49:03.923',0,'UI/report/60/630dc1f998ba4e9d9258c1d02879da95.png','system','2019-12-19 16:48:59.941'),(387,60,83,28,'输入关键字',1,'百度关键字','向元素[id;;kw]输入数据[测试一下]成功',0,1,'2019-12-19 16:49:04.557',0,'UI/report/60/569840a97a884cd6b1c81148d990c004.png','system','2019-12-19 16:49:03.931'),(388,60,83,29,'点击搜索按钮',1,'百度关键字','点击元素[id;;su]成功',0,1,'2019-12-19 16:49:05.096',0,'UI/report/60/dd963f6b01814f94b2c16915a9faadb4.png','system','2019-12-19 16:49:04.567'),(389,60,83,35,'设置一个变量',1,'百度关键字','缓存成功,变量为：测试变量，数据为：测试变量搜索',0,1,'2019-12-19 16:49:05.474',0,'UI/report/60/b42cb9ace0134058bd6c8ee1051a0dfc.png','system','2019-12-19 16:49:05.105'),(390,71,84,57,'打开百度页面',22,'新建用例','打开URL[https://www.baidu.com/]成功',0,1,'2020-01-12 22:25:09.065',0,'UI/report/71/78233d97f102472589727b6bdd411e56.png','system','2020-01-12 22:25:07.346'),(391,71,84,58,'输入查询条件',22,'新建用例','向元素[id;;kw]输入数据[asdfasdfasdf]成功',0,1,'2020-01-12 22:25:09.776',0,'UI/report/71/72281aee366b4db78ea914147bfb3409.png','system','2020-01-12 22:25:09.082'),(392,71,84,59,'点击查询',22,'新建用例','点击元素[id;;su]成功',0,1,'2020-01-12 22:25:11.850',0,'UI/report/71/a930cb8c3918463a9173f48d6117288b.png','system','2020-01-12 22:25:09.785');

/*Table structure for table `t_test_suite_ui_log` */

DROP TABLE IF EXISTS `t_test_suite_ui_log`;

CREATE TABLE `t_test_suite_ui_log` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `plan_log_id` bigint(50) NOT NULL COMMENT '计划日志id',
  `suite_id` bigint(11) NOT NULL,
  `suite_name` varchar(150) NOT NULL DEFAULT '' COMMENT '业务名称',
  `project_id` bigint(11) NOT NULL DEFAULT '0' COMMENT '项目id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '执行状态 0成功 1失败 2跳过',
  `case_total_count` int(8) NOT NULL DEFAULT '0' COMMENT '用例总数',
  `case_succ_count` int(8) DEFAULT '0' COMMENT '成功数',
  `case_fail_count` int(8) DEFAULT '0' COMMENT '失败数',
  `case_skip_count` int(8) DEFAULT '0' COMMENT '未执行用例',
  `end_time` datetime(3) DEFAULT NULL COMMENT '结束时间',
  `remark` varchar(50) DEFAULT '' COMMENT '备注',
  `create_by` varchar(50) DEFAULT 'system' COMMENT 'createBy',
  `create_time` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) COMMENT 'createTime',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COMMENT='ui自动化业务流日志';

/*Data for the table `t_test_suite_ui_log` */

insert  into `t_test_suite_ui_log`(`id`,`plan_log_id`,`suite_id`,`suite_name`,`project_id`,`status`,`case_total_count`,`case_succ_count`,`case_fail_count`,`case_skip_count`,`end_time`,`remark`,`create_by`,`create_time`) values (50,55,8,'随便建一个用例集',1,0,1,1,0,0,'2019-12-18 18:58:03.412','','system','2019-12-18 18:57:53.300'),(51,56,8,'随便建一个用例集',1,0,1,1,0,0,'2019-12-18 20:35:39.916','','system','2019-12-18 20:35:30.788'),(54,60,8,'随便建一个用例集',1,0,1,1,0,0,'2019-12-19 16:49:06.325','','system','2019-12-19 16:48:52.038'),(55,71,8,'随便建一个用例集',1,0,1,1,0,0,'2020-01-12 22:25:12.719','','system','2020-01-12 22:25:01.518');

/*Table structure for table `t_testbusiness_testcase_ui` */

DROP TABLE IF EXISTS `t_testbusiness_testcase_ui`;

CREATE TABLE `t_testbusiness_testcase_ui` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `business_id` bigint(11) DEFAULT NULL,
  `case_id` bigint(11) DEFAULT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `create_by` varchar(64) DEFAULT NULL,
  `update_by` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;

/*Data for the table `t_testbusiness_testcase_ui` */

insert  into `t_testbusiness_testcase_ui`(`id`,`business_id`,`case_id`,`sort`,`create_by`,`update_by`,`create_time`,`update_time`) values (37,3,1,0,'admin',NULL,'2019-04-24 07:34:15',NULL),(38,3,2,0,'admin',NULL,'2019-04-24 07:34:15',NULL),(39,3,3,0,'admin',NULL,'2019-04-24 07:34:15',NULL),(40,3,4,0,'admin',NULL,'2019-04-24 07:34:15',NULL),(46,5,1,0,'admin',NULL,'2019-05-10 23:13:15',NULL),(47,5,2,0,'admin',NULL,'2019-05-10 23:13:15',NULL),(49,9,6,0,'admin',NULL,'2019-05-29 09:59:00',NULL),(267,10,7,0,'admin','admin','2019-09-03 18:36:21','2019-09-03 18:36:21'),(268,11,8,0,'admin','admin','2019-09-03 19:23:04','2019-09-03 19:23:04'),(275,NULL,6,0,NULL,NULL,NULL,NULL),(276,NULL,1,0,NULL,NULL,NULL,NULL),(279,1,1,0,NULL,NULL,NULL,NULL),(280,1,5,0,NULL,NULL,NULL,NULL),(281,NULL,6,0,NULL,NULL,NULL,NULL),(282,NULL,1,0,NULL,NULL,NULL,NULL),(283,NULL,6,0,NULL,NULL,NULL,NULL),(284,NULL,1,0,NULL,NULL,NULL,NULL),(285,NULL,6,0,NULL,NULL,NULL,NULL),(286,NULL,1,0,NULL,NULL,NULL,NULL),(287,NULL,6,0,NULL,NULL,NULL,NULL),(288,NULL,1,0,NULL,NULL,NULL,NULL),(289,NULL,6,0,NULL,NULL,NULL,NULL),(290,NULL,1,0,NULL,NULL,NULL,NULL),(291,NULL,6,0,NULL,NULL,NULL,NULL),(292,NULL,1,0,NULL,NULL,NULL,NULL),(293,NULL,1,0,'admin',NULL,'2019-11-20 17:05:41',NULL);

/*Table structure for table `t_testbusiness_ui` */

DROP TABLE IF EXISTS `t_testbusiness_ui`;

CREATE TABLE `t_testbusiness_ui` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `project_id` bigint(11) NOT NULL DEFAULT '-1',
  `close_browser` bigint(11) DEFAULT '1' COMMENT '执行完毕后是否关闭浏览器:1、关闭 0、不关闭',
  `timout_time` bigint(11) DEFAULT NULL COMMENT '超时时间，单位秒',
  `fail_continue` int(1) DEFAULT '0' COMMENT '失败了是否继续0：不继续，1：继续',
  `remark` text,
  `create_by` varchar(64) DEFAULT NULL,
  `update_by` varchar(64) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `t_testbusiness_ui` */

insert  into `t_testbusiness_ui`(`id`,`name`,`project_id`,`close_browser`,`timout_time`,`fail_continue`,`remark`,`create_by`,`update_by`,`create_time`,`update_time`) values (1,'测试一下百度',1,NULL,121,0,'备注',NULL,'admin',NULL,NULL),(9,'测试Q',1,1,120,0,'测试Q','admin','admin','2019-05-20 17:54:49','2019-06-03 10:06:15');

/*Table structure for table `t_testcase_ui` */

DROP TABLE IF EXISTS `t_testcase_ui`;

CREATE TABLE `t_testcase_ui` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `project_id` bigint(11) NOT NULL,
  `case_type` bigint(11) DEFAULT '1' COMMENT '1: UI 2: APP 3:接口',
  `remark` text COMMENT '备注',
  `create_by` varchar(64) DEFAULT NULL,
  `update_by` varchar(64) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `t_testcase_ui` */

insert  into `t_testcase_ui`(`id`,`name`,`project_id`,`case_type`,`remark`,`create_by`,`update_by`,`create_time`,`update_time`) values (1,'登陆',1,NULL,'登陆1',NULL,'admin',NULL,NULL),(5,'百度一下',1,1,'百度','admin','admin','2019-05-20 17:48:11','2019-06-02 17:34:27'),(6,'登录',4,NULL,'2131',NULL,'admin',NULL,NULL);

/*Table structure for table `t_testcase_ui_new` */

DROP TABLE IF EXISTS `t_testcase_ui_new`;

CREATE TABLE `t_testcase_ui_new` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `project_id` bigint(11) NOT NULL,
  `timout_time` bigint(11) DEFAULT NULL COMMENT '超时时间，单位分',
  `fail_continue` int(2) DEFAULT '0' COMMENT '失败了是否继续0：不继续，1：继续',
  `params` text COMMENT '业务名参数',
  `case_vars` text COMMENT '用例内部参数',
  `case_type` bigint(11) DEFAULT '1' COMMENT '1,用例、2：业务',
  `remark` text COMMENT '备注',
  `create_by` varchar(64) DEFAULT 'system',
  `update_by` varchar(64) DEFAULT 'system',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

/*Data for the table `t_testcase_ui_new` */

insert  into `t_testcase_ui_new`(`id`,`name`,`project_id`,`timout_time`,`fail_continue`,`params`,`case_vars`,`case_type`,`remark`,`create_by`,`update_by`,`create_time`,`update_time`) values (10,'公共登陆',1,2,0,'[{\"name\":\"账号\",\"description\":\"调用的第一个参数\"},{\"name\":\"密码\",\"description\":\"调用的第二个参数\"}]','[]',2,NULL,NULL,NULL,'2020-01-15 21:33:15',NULL),(22,'新建用例',1,1,0,'','[{\"name\":\"百度ur\",\"value\":\"http://www.baidu.com\",\"description\":\"\"}]',1,NULL,NULL,NULL,'2020-01-21 10:19:57',NULL);

/*Table structure for table `t_testsuite_ui` */

DROP TABLE IF EXISTS `t_testsuite_ui`;

CREATE TABLE `t_testsuite_ui` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `project_id` bigint(11) NOT NULL DEFAULT '-1',
  `create_by` varchar(64) DEFAULT NULL,
  `update_by` varchar(64) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `t_testsuite_ui` */

insert  into `t_testsuite_ui`(`id`,`name`,`project_id`,`create_by`,`update_by`,`create_time`,`update_time`) values (8,'随便建一个用例集',1,'admin','admin','2019-11-27 15:06:43','2019-11-27 15:06:43');

/*Table structure for table `t_token` */

DROP TABLE IF EXISTS `t_token`;

CREATE TABLE `t_token` (
  `id` varchar(36) NOT NULL COMMENT 'token',
  `val` text NOT NULL COMMENT 'LoginUser的json串',
  `expireTime` datetime NOT NULL,
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `t_token` */

insert  into `t_token`(`id`,`val`,`expireTime`,`createTime`,`updateTime`) values ('df7d6235-bcf4-4461-ab32-46bcb6c5b5e8','{\"accountNonExpired\":true,\"accountNonLocked\":true,\"authorities\":[],\"birthday\":899222400000,\"createTime\":1491808898000,\"credentialsNonExpired\":true,\"email\":\"1314@163.com\",\"enabled\":true,\"expireTime\":1557317557882,\"id\":1,\"loginTime\":1557310357882,\"nickname\":\"超级管理员\",\"password\":\"$2a$10$h/EuvQwXor9o4/BIXFZKP.VDVJuZCSLDvQBzdeh.mlgDVjMT7jJ6m\",\"permissions\":[{\"children\":[{\"children\":[{\"activeMenu\":\"/uiTest/testCase\",\"children\":[],\"component\":\"uiTest/UITestCase/list\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":34,\"name\":\"用例列表\",\"parentId\":32,\"path\":\"list\",\"permission\":\"\",\"sort\":0,\"type\":3,\"updateTime\":1557310357772},{\"activeMenu\":\"/uiTest/testCase\",\"children\":[],\"component\":\"uiTest/UITestCase/TestStep\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":33,\"name\":\"用例步骤\",\"parentId\":32,\"path\":\"step\",\"permission\":\"\",\"sort\":1,\"type\":3,\"updateTime\":1557310357772}],\"component\":\"uiTest/UITestCase/index\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":32,\"name\":\"用例管理\",\"parentId\":27,\"path\":\"testCase\",\"permission\":\"\",\"redirect\":\"/uiTest/testCase/list\",\"sort\":0,\"type\":1,\"updateTime\":1557310357772},{\"activeMenu\":\"\",\"children\":[{\"activeMenu\":\"/uiTest/business\",\"children\":[],\"component\":\"uiTest/UIBusiness/list\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":36,\"name\":\"业务流列表\",\"parentId\":35,\"path\":\"list\",\"permission\":\"\",\"redirect\":\"\",\"sort\":0,\"type\":3,\"updateTime\":1557310357772},{\"activeMenu\":\"/uiTest/business\",\"children\":[],\"component\":\"uiTest/UIBusiness/UIBusinessCase\",\"createTime\":1557310357773,\"icon\":\"\",\"id\":37,\"name\":\"业务流用例\",\"parentId\":35,\"path\":\"uiBusinessCase\",\"permission\":\"\",\"redirect\":\"\",\"sort\":1,\"type\":3,\"updateTime\":1557310357773}],\"component\":\"uiTest/UIBusiness/index\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":35,\"name\":\"业务流管理\",\"parentId\":27,\"path\":\"business\",\"permission\":\"\",\"redirect\":\"/uiTest/business/list\",\"sort\":1,\"type\":1,\"updateTime\":1557310357772}],\"component\":\"Layout\",\"createTime\":1557310357772,\"icon\":\"ui60\",\"id\":27,\"name\":\"UI自动化\",\"parentId\":0,\"path\":\"/uiTest\",\"permission\":\"\",\"sort\":0,\"type\":4,\"updateTime\":1557310357772},{\"children\":[{\"children\":[{\"children\":[],\"component\":\"publicConfig/autoTestTask/autoTestTask\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":38,\"name\":\"任务调度列表\",\"parentId\":26,\"path\":\"list\",\"permission\":\"\",\"sort\":0,\"type\":3,\"updateTime\":1557310357772}],\"component\":\"publicConfig/autoTestTask/index\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":26,\"name\":\"任务调度\",\"parentId\":25,\"path\":\"autoTestTask\",\"permission\":\"\",\"redirect\":\"/publicConfig/autoTestTask/list\",\"sort\":0,\"type\":1,\"updateTime\":1557310357772},{\"activeMenu\":\"\",\"children\":[],\"component\":\"publicConfig/client/client\",\"createTime\":1557310357774,\"icon\":\"\",\"id\":39,\"name\":\"执行机管理\",\"parentId\":25,\"path\":\"client\",\"permission\":\"\",\"redirect\":\"\",\"sort\":1,\"type\":1,\"updateTime\":1557310357774}],\"component\":\"Layout\",\"createTime\":1557310357774,\"icon\":\"peoples\",\"id\":25,\"name\":\"公共配置\",\"parentId\":0,\"path\":\"/publicConfig\",\"permission\":\"\",\"sort\":4,\"type\":4,\"updateTime\":1557310357774},{\"children\":[{\"children\":[],\"component\":\"sysConfig/User\",\"createTime\":1557310357771,\"icon\":\"\",\"id\":6,\"name\":\"用户管理\",\"parentId\":5,\"path\":\"user\",\"permission\":\"\",\"sort\":0,\"type\":1,\"updateTime\":1557310357771},{\"children\":[],\"component\":\"sysConfig/Role/role\",\"createTime\":1557310357772,\"icon\":\"\",\"id\":7,\"name\":\"角色管理\",\"parentId\":5,\"path\":\"role\",\"permission\":\"\",\"sort\":1,\"type\":1,\"updateTime\":1557310357772},{\"children\":[],\"component\":\"sysConfig/Page\",\"createTime\":1557310357774,\"icon\":\"\",\"id\":8,\"name\":\"菜单管理\",\"parentId\":5,\"path\":\"page\",\"permission\":\"\",\"sort\":2,\"type\":1,\"updateTime\":1557310357774},{\"children\":[],\"component\":\"sysConfig/Project\",\"createTime\":1557310357774,\"icon\":\"\",\"id\":18,\"name\":\"项目管理\",\"parentId\":5,\"path\":\"project\",\"permission\":\"\",\"sort\":3,\"type\":1,\"updateTime\":1557310357774},{\"children\":[],\"component\":\"sysConfig/sysTask\",\"createTime\":1557310357774,\"icon\":\"\",\"id\":17,\"name\":\"定时任务\",\"parentId\":5,\"path\":\"task\",\"permission\":\"\",\"sort\":4,\"type\":1,\"updateTime\":1557310357774},{\"children\":[],\"component\":\"sysConfig/SysLog\",\"createTime\":1557310357774,\"icon\":\"\",\"id\":13,\"name\":\"系统日志\",\"parentId\":5,\"path\":\"log\",\"permission\":\"\",\"sort\":5,\"type\":1,\"updateTime\":1557310357774},{\"children\":[],\"component\":\"sysConfig/sysDict\",\"createTime\":1557310357774,\"icon\":\"\",\"id\":22,\"name\":\"数据字典\",\"parentId\":5,\"path\":\"dict\",\"permission\":\"\",\"sort\":6,\"type\":1,\"updateTime\":1557310357774}],\"component\":\"Layout\",\"createTime\":1557310357775,\"icon\":\"config\",\"id\":5,\"name\":\"系统设置\",\"parentId\":0,\"path\":\"/sysConfig\",\"permission\":\"\",\"sort\":20,\"type\":4,\"updateTime\":1557310357775}],\"phone\":\"\",\"sex\":0,\"status\":1,\"telephone\":\"\",\"token\":\"df7d6235-bcf4-4461-ab32-46bcb6c5b5e8\",\"updateTime\":1552577575000,\"username\":\"admin\"}','2019-05-08 20:12:38','2019-05-08 18:12:38','2019-05-08 18:12:38');

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1042 DEFAULT CHARSET=utf8;

/*Data for the table `t_user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
