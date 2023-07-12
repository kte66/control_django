from django.shortcuts import render
from django.http import JsonResponse
from dj_api.models import user
import json
# Create your views here.


def login(request):
    '''用户登录验证'''
    if request.method =="POST":
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        # print(body)
        user_id = body['user_id']
        user_password = body['user_password']
        userl = user.objects.filter(user_id=user_id)
        # print(userl)
        # print(userl[0].user_password)
        if userl[0].user_password == user_password:
            return JsonResponse({"answer":"True"})
        else :
            return JsonResponse({"answer":"False"})
    else:
        return JsonResponse({'code': 100103, 'msg': '请求方法错误'})
def register(request):
    if request.method =='POST':
        try:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            # print(body)
            user_id = body['user_id']
            user_password = body['user_password']
            user_Email = body['user_Email']
            user_phone = body['user_phone']
            user.objects.create(user_id=user_id,user_password=user_password,user_Email=user_Email,user_phone=user_phone)
            return JsonResponse({"register":"True"})
        except:
            return JsonResponse({'register':'False'})
        
    else:
        return JsonResponse({'code': 100103, 'msg': '请求方法错误'})
def get_user(request):
    if request.method == 'POST':
        usid = request.POST.get('usid','')
        name = request.POST.get('name','')
        if usid=='' or name=='':
            return JsonResponse({'code':100101,'msg':'用户id或密码不能为空'})
        if usid=='1' and name=='james':
            return JsonResponse({'code':100200,'msg':'添加成功','data':{'usid':1,'name':'james','age':36}})
        else:
            return JsonResponse({'code':100102,'msg':'添加失败'})

    else:
        return JsonResponse({'code': 100103, 'msg': '请求方法错误'})