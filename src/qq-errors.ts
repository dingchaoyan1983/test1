const errors: Record<number, Error> = {
  // 系统级错误码参照
  10001: new Error('错误的请求KEY	'),
  10002:	new Error('该KEY无请求权限'),
  10003:	new Error('KEY过期'),
  10004:	new Error('错误的OPENID'),
  10005:	new Error('应用未审核超时，请提交认证'),
  10007:	new Error('未知的请求源'),
  10008:	new Error('被禁止的IP'),
  10009:	new Error('被禁止的KEY'),
  10011:	new Error('当前IP请求超过限制'),
  10012:	new Error('请求超过次数限制'),
  10013:	new Error('测试KEY超过请求限制'),
  10014:	new Error('系统内部异常(调用充值类业务时，请务必联系客服或通过订单查询接口检测订单，避免造成损失)'),
  10020:	new Error('接口异常'),
  10021:	new Error('接口停用'),
  // 服务级错误码参照
  201701: new Error('查询QQ不能为空'),
  201702: new Error('查询失败，请重试'),
};

export default errors;