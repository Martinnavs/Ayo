# Generated by Django 3.1.3 on 2021-03-18 05:03

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('contact_number', models.CharField(max_length=15)),
                ('address', models.CharField(max_length=200)),
                ('registration', models.DateTimeField(auto_now_add=True)),
                ('role', models.CharField(blank=True, max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='Users.user')),
                ('medical_record', models.TextField(blank=True, max_length=200, null=True)),
                ('is_verified', models.BooleanField(default=False)),
            ],
            bases=('Users.user',),
        ),
        migrations.CreateModel(
            name='Owner',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='Users.user')),
            ],
            bases=('Users.user',),
        ),
        migrations.CreateModel(
            name='PharmacyWorker',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='Users.user')),
                ('is_available', models.BooleanField(default=True)),
            ],
            bases=('Users.user',),
        ),
    ]
