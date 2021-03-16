# Generated by Django 3.1.4 on 2020-12-11 19:30

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(null=True, upload_to=users.models.user_directory_path),
        ),
        migrations.AlterField(
            model_name='profile',
            name='role',
            field=models.CharField(choices=[('1', 'admin'), ('2', 'moderator'), ('3', 'user')], default='3', max_length=20),
        ),
    ]
