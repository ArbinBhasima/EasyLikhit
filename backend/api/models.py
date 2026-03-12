from django.db import models

# -----------------------------
# Mock Test
# -----------------------------
class MockTest(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# -----------------------------
# Question Bank
# -----------------------------
class Question(models.Model):
    QUESTION_TYPES = (
        ("MCQ", "Multiple Choice"),
        ("TF", "True/False"),
    )

    mock_test = models.ForeignKey(MockTest, on_delete=models.CASCADE, related_name="questions", null=True, blank=True)
    question_text = models.TextField()
    question_type = models.CharField(max_length=10, choices=QUESTION_TYPES, default="MCQ")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question_text[:50]

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="choices")
    choice_text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.choice_text

# -----------------------------
# Traffic Signs
# -----------------------------
class TrafficSign(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="traffic_signs/")
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

# -----------------------------
# Vision Test
# -----------------------------
class VisionTest(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="vision_tests/")
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
    

# -----------------------------
# About Us Page
# -----------------------------
class AboutUs(models.Model):
    title = models.CharField(max_length=200, default="About Us")
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


# -----------------------------
# Traffic Rules Page
# -----------------------------
class TrafficRule(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


# -----------------------------
# Blog Page
# -----------------------------
class Blog(models.Model):
    title = models.CharField(max_length=250)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title