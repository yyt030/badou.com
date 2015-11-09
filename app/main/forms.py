# coding: utf-8
from flask.ext.wtf import Form
from wtforms import StringField, TextAreaField, BooleanField, SelectField, \
    SubmitField
from wtforms.validators import Length, Email, Regexp, DataRequired
from wtforms import ValidationError
from flask.ext.pagedown.fields import PageDownField
from ..models import Role, User


class NameForm(Form):
    name = StringField(u'你的名字?', validators=[DataRequired()])
    submit = SubmitField(u'提交')


class EditProfileForm(Form):
    name = StringField(u'真实名字', validators=[Length(0, 64)])
    location = StringField(u'位置', validators=[Length(0, 64)])
    about_me = TextAreaField(u'关于我')
    submit = SubmitField(u'提交')


class EditProfileAdminForm(Form):
    email = StringField(u'邮箱', validators=[DataRequired(), Length(1, 64),
                                           Email()])
    username = StringField(u'用户名', validators=[
        DataRequired(), Length(1, 64), Regexp('^[A-Za-z][A-Za-z0-9_.]*$', 0,
                                              u'用户名必须是字母, '
                                              u'数字, . 或者是下划线')])
    confirmed = BooleanField('Confirmed')
    role = SelectField('Role', coerce=int)
    name = StringField('Real name', validators=[Length(0, 64)])
    location = StringField('Location', validators=[Length(0, 64)])
    about_me = TextAreaField('About me')
    submit = SubmitField('Submit')

    def __init__(self, user, *args, **kwargs):
        super(EditProfileAdminForm, self).__init__(*args, **kwargs)
        self.role.choices = [(role.id, role.name)
                             for role in Role.query.order_by(Role.name).all()]
        self.user = user

    def validate_email(self, field):
        if field.data != self.user.email and \
                User.query.filter_by(email=field.data).first():
            raise ValidationError(u'邮箱已注册')

    def validate_username(self, field):
        if field.data != self.user.username and \
                User.query.filter_by(username=field.data).first():
            raise ValidationError(u'用户名已使用')


class PostForm(Form):
    body = PageDownField(u"想问什么问题^:^？", validators=[DataRequired()])
    submit = SubmitField(u'发布')


class CommentForm(Form):
    body = PageDownField(u'输入回复', validators=[DataRequired()])
    submit = SubmitField(u'发布')


class SearchForm(Form):
    search = StringField('', validators=[DataRequired()])
    submit = SubmitField(u'搜索')


class AskForm(Form):
    title = StringField(u'标题', validators=[Length(1, 128)])
    tag = StringField(u'标签', validators=[Length(1, 64)])
    content = TextAreaField(u'问题详细描述', validators=[Length(1, 10240)], )
    submit = SubmitField(u'发布问题')
