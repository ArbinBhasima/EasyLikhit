from django.contrib import admin
from .models import (
    MockTest,
    Question,
    Choice,
    TrafficSign,
    VisionTest,
    AboutUs,
    TrafficRule,
    Blog,
)

# -----------------------------
# Inline for Choices in Questions
# -----------------------------
class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3

# -----------------------------
# Question Admin
# -----------------------------
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question_text', 'question_type', 'mock_test', 'created_at')
    list_filter = ('question_type', 'mock_test')
    search_fields = ('question_text',)
    inlines = [ChoiceInline]

# -----------------------------
# Mock Test Admin
# -----------------------------
class MockTestAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'created_at')
    search_fields = ('title',)

# -----------------------------
# Traffic Sign Admin
# -----------------------------
class TrafficSignAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

# -----------------------------
# Vision Test Admin
# -----------------------------
class VisionTestAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

# -----------------------------
# About Us Admin
# -----------------------------
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ('title', 'updated_at')
    search_fields = ('title',)

# -----------------------------
# Traffic Rule Admin
# -----------------------------
class TrafficRuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'updated_at')
    search_fields = ('title',)

# -----------------------------
# Blog Admin
# -----------------------------
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_at', 'is_published')
    search_fields = ('title',)
    list_filter = ('is_published', 'published_at')
    prepopulated_fields = {"slug": ("title",)}

# -----------------------------
# Register all models
# -----------------------------
admin.site.register(MockTest, MockTestAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(TrafficSign, TrafficSignAdmin)
admin.site.register(VisionTest, VisionTestAdmin)
admin.site.register(AboutUs, AboutUsAdmin)
admin.site.register(TrafficRule, TrafficRuleAdmin)
admin.site.register(Blog, BlogAdmin)