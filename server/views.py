from django.shortcuts import render

def homepage(request):
    return render(request, "client/views/homepage.html")