///head 태그 부분에 <script src = "color.js">로 정리하여 이용하면 편리하다.

var links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}


var Body = {
    setColor: function (color) {
        document.querySelector('body').style.Color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }


}


function BodysetBackgroundColor(color) {
    document.querySelector('body').style.Color = color;
}

function nightdayHandler(self) {
    var target = document.querySelector('body')
    if (self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');
        self.value = 'day';
        links.setColor('powderblue');
    }

}

else
{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    links.setColor('blue');
}

}