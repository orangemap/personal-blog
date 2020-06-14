'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getMmergencypassportList() {
      let select = ""
      // const user = await this.app.mysql.query('SELECT t.t_name,count( t.t_id ) FROM teacher t GROUP BY t.t_id HAVING t.t_name LIKE "墨%";', '');
      //  console.log(user)
        let  res =   {"url":"http://192.168.1.35/mgt/v1/passPermit?list&pageNumber=1&pageSize=20","request":{"methods":"POST","body":{"pageNumber":1,"pageSize":20},"userPin":""},"result":{"requestId":"933eaf09-006e-466e-a084-f00449d9fd61","result":{"resultList":[{"codeId":"qjbJu3A4","taskName":"北京兄弟救援队抵达灾害指挥中心","keepId":"e361643c1cc04280a1bb9df435c34fd8","carNumber":"京N34789","carType":"越野","startTime":"2020-03-16 15:12:14","endTime":"2020-03-16 15:12:14","fromArea":"东北B市XX区XX街道","toArea":"西南A市","passProvince":"C省、D省","leader":"张若","leaderMobile":"13422113344","driver":"张若","driverMobile":"13422113344","token":null,"status":"INVALID","departName":"XX部门","shortUrl":"w.3.cn/10000ccH","permitType":null},{"codeId":"hi8eUpGl","taskName":"抵达灾害指挥中心","keepId":"3cb0854da18f48df999d4363dbd889d1","carNumber":"京A00003","carType":"拖车","startTime":"2020-06-03 00:00:00","endTime":"2020-06-04 23:59:59","fromArea":"东北B市XX区XX街道","toArea":"西南A市","passProvince":"C省、D省","leader":"刘阳","leaderMobile":"18700000001","driver":"刘阳","driverMobile":"18700000001","token":null,"status":"INVALID","departName":"XX部门","shortUrl":"w.3.cn/10000b4q","permitType":null},{"codeId":"UN11IIRC","taskName":"武汉疫情20200121","keepId":"JDWL00000002-1","carNumber":"京A61167","carType":"中型货车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"北京市","toArea":"湖北武汉市","passProvince":"北京、河北省、山东省、湖北省","leader":"乔峰","leaderMobile":"10011211025","driver":"欧阳乔丹","driverMobile":"11051085658","token":null,"status":"VALID","departName":"京东商城","shortUrl":"w.3.cn/100009oU","permitType":null},{"codeId":"I4oPJf6X","taskName":"武汉疫情20200121","keepId":"JDWL00000002-1","carNumber":"京A6116bB","carType":"微型货车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"北京市","toArea":"湖北武汉市","passProvince":"北京、河北省、山东省、湖北省","leader":"乔峰","leaderMobile":"10011211025","driver":"段誉","driverMobile":"11251085658","token":null,"status":"VALID","departName":"京东商城","shortUrl":"w.3.cn/100009ph","permitType":null},{"codeId":"EtqUAq4D","taskName":"武汉疫情20200121","keepId":"JDWL00000002-1","carNumber":"京A6116C","carType":"重型货车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"北京市","toArea":"湖北武汉市","passProvince":"北京、河北省、山东省、湖北省","leader":"乔峰","leaderMobile":"10011211025","driver":"新一","driverMobile":"11351085658","token":null,"status":"VALID","departName":"京东商城","shortUrl":"w.3.cn/100009GG","permitType":null},{"codeId":"uEhtcJgW","taskName":"人员紧急转移！","keepId":"1004","carNumber":"沪123Q8","carType":"面包车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"泉州市草洋村东南约539米","toArea":"泉州市宫脊西南235.0米","passProvince":"C省、D省","leader":"张","leaderMobile":"13611357167","driver":"田晨晨","driverMobile":"18812341234","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000anI","permitType":null},{"codeId":"z042Hg11","taskName":"医疗任务","keepId":"306","carNumber":"陕F1245","carType":"面包车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"汉中市龚家台子西北约96米","toArea":"金华市东康路381号清塘坞西北156米","passProvince":"C省、D省","leader":"王灿","leaderMobile":"13822344528","driver":"郑康龙","driverMobile":"18822344528","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000aBW","permitType":null},{"codeId":"n2XvCeYa","taskName":"抵达灾害指挥中心","keepId":"312","carNumber":"陕F1245","carType":"面包车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"汉中市大槽梁东北约148米","toArea":"浙江省永嘉县堰塞湖","passProvince":"C省、D省","leader":"王灿","leaderMobile":"13822344528","driver":"王灿","driverMobile":"13822344528","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000aC1","permitType":null},{"codeId":"MOWMyKMv","taskName":"开始救灾任务","keepId":"315","carNumber":"京A00003","carType":"拖车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"巴音郭楞蒙古自","toArea":"巴音郭楞蒙古自丫浮沟东南1846.0米","passProvince":"C省、D省","leader":"杨艳武","leaderMobile":"17700000001","driver":"杨艳武","driverMobile":"17700000001","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000aCI","permitType":null},{"codeId":"I90XgfyJ","taskName":"任务收尾","keepId":"316","carNumber":"京A00004","carType":"铲车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"北京市潘家坟村东北312.0米","toArea":"酒泉市尖牛井西北1906.0米","passProvince":"C省、D省","leader":"杨艳武","leaderMobile":"17700000001","driver":"杨艳武","driverMobile":"17700000001","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000ap7","permitType":null},{"codeId":"AkXVRySj","taskName":"抵达灾害指挥中心","keepId":"318","carNumber":"京A00001","carType":"轿车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"海南藏族自托勒台村东南约877米","toArea":"新疆阿克苏地区沙雅县","passProvince":"C省、D省","leader":"王伟","leaderMobile":"18700000001","driver":"王伟","driverMobile":"18700000001","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000aFr","permitType":null},{"codeId":"HgIbK0Vl","taskName":"西南A市油气管道泄露","keepId":"879172595609","carNumber":"甘A61168","carType":"重型专项作业车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"东北B市XX区XX街道","toArea":"西南A市","passProvince":"C省、D省","leader":"苏灵波","leaderMobile":"15726674305","driver":"蔡文","driverMobile":"15726674305","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000asi","permitType":null},{"codeId":"KqrynHtG","taskName":"西南A市油气管道泄露","keepId":"879172595609","carNumber":"甘A71508","carType":"轻型普通货车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"东北B市XX区XX街道","toArea":"西南A市","passProvince":"C省、D省","leader":"苏灵波","leaderMobile":"15726674305","driver":"邓永亮","driverMobile":"18710101850","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000aGk","permitType":null},{"codeId":"D5klJ32J","taskName":"抵达灾害指挥中心","keepId":"325","carNumber":"京A12345","carType":"货车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"北京孔庙","toArea":"四川成都市青白江区","passProvince":"C省、D省","leader":"李四一","leaderMobile":"5947250","driver":"李四一","driverMobile":"5947250","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000atV","permitType":null},{"codeId":"nrnOysq9","taskName":"抵达灾害指挥中心","keepId":"bf489645d84d48459d871d1483164d99","carNumber":"京N34789","carType":"越野","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"东北B市XX区XX街道","toArea":"西南A市","passProvince":"C省、D省","leader":"张三","leaderMobile":"13533778865","driver":"张三","driverMobile":"13533778865","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000atX","permitType":null},{"codeId":"GHrTmh39","taskName":"抵达灾害指挥中心","keepId":"734f7ae7ecc64a25b17246faf44650e0","carNumber":"京N34789","carType":"越野","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"东北B市XX区XX街道","toArea":"西南A市","passProvince":"C省、D省","leader":"张三","leaderMobile":"13533778865","driver":"张三","driverMobile":"13533778865","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000aIK","permitType":null},{"codeId":"BKVTouLF","taskName":"辅助救援","keepId":"4a27907bea044ef39b1ecf1797a27db4","carNumber":"京A12345","carType":"货车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"北京孔庙","toArea":"四川成都市青白江区","passProvince":"C省、D省","leader":"李四一","leaderMobile":"5947250","driver":"李四一","driverMobile":"5947250","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000aup","permitType":null},{"codeId":"DbnDlEe1","taskName":"抵达灾害指挥中心","keepId":"a25628c003894e4db936283b5958f114","carNumber":"京A12345","carType":"货车","startTime":"2020-06-02 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"金华市茭道镇中心小学东北374.0米","toArea":"浙江省永嘉县堰塞湖","passProvince":"C省、D省","leader":"李四一","leaderMobile":"5947250","driver":"李四一","driverMobile":"5947250","token":null,"status":"VALID","departName":"XX部门","shortUrl":"w.3.cn/10000avp","permitType":null},{"codeId":"W0x8iesZ","taskName":"医疗救援","keepId":"319","carNumber":"京A00002","carType":"救护车","startTime":"2020-06-01 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"保定市吕家庄西南615.0米","toArea":"酒泉市安西县3道沟镇2家台煤窑西北1165.0米","passProvince":"C省、D省","leader":"王伟","leaderMobile":"18700000001","driver":"王伟","driverMobile":"18700000001","token":null,"status":"DELETED","departName":"XX部门","shortUrl":"w.3.cn/10000aFG","permitType":null},{"codeId":"8HjbGasu","taskName":"武汉疫情20200121","keepId":"JDWL00000002-1","carNumber":"京A6116H","carType":"中型货车","startTime":"2020-06-03 00:00:00","endTime":"2020-06-30 23:59:59","fromArea":"北京市","toArea":"湖北武汉市","passProvince":"北京、河北省、山东省、湖北省","leader":"乔峰","leaderMobile":"10011211025","driver":"欧阳乔丹","driverMobile":"11051085658","token":null,"status":"DELETED","departName":"京东商城","shortUrl":"w.3.cn/100009pG","permitType":null}],"totalCount":264},"error":null}};
        return res
  }
}

module.exports = UserService;