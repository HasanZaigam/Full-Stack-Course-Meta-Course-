from django import forms
from .models import ChaiVarieties

class chaiVarietiesForms(forms.Form):
    ChaiVariety = forms.ModelChoiceField(queryset=ChaiVarieties.objects.all(), 
                                         label="Select chai variety", widget=forms.Select(attrs={
            'class': 'text-black',
            'style': 'color: black; background-color: white;'
        }))