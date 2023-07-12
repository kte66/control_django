from django.db import models

# Create your models here.
class user(models.Model):
    '''自定义user表对应的model'''
    user_id = models.CharField(primary_key=True,max_length=100)
    user_password = models.CharField(max_length=100)
    user_Email = models.CharField(max_length=100)
    user_phone = models.CharField(max_length=100)

    def __str__(self) -> str:
        return "user_id:%s,user_password:%s,user_Email:%s,user_phone:%s"%(self.user_id,self.user_password,self.user_Email,self.user_phone)
    class Meta:
        db_table="user"
class data(models.Model):
    '''自定义data表对应的model'''
    data_id = models.CharField(primary_key=True,max_length=100)
    user_id = models.ForeignKey(user,on_delete=models.CASCADE)
    data_address = models.CharField(max_length=100)

    def __str__(self) -> str:
        return "data_id:%s,user_id:%s,data_address:%s"%(self.data_id,self.user_id,self.data_address)
    class Meta:
        db_table="data"
