import { React, useState } from "react";
import * as S from "./styledComponents/App.styles";

function App() {

    const [isDarkmode, setIsDarkmode] = useState(false);

    function changeDayMode(){
        if(isDarkmode){
            setIsDarkmode(false);
        } else if(!isDarkmode){
            setIsDarkmode(true);
        }
    }
    
    return (
        <S.TopLevelContainer isDarkmode={isDarkmode}>
            <S.Header>
                <h2>Logo</h2>
                <h3>Fake link</h3>
                <h3>Fake link</h3>
                <S.HeaderButton onClick={changeDayMode}>Switch</S.HeaderButton>
            </S.Header>
            <S.Container>
                <h1>Darkmode test.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum, risus vitae faucibus congue, purus ipsum ullamcorper est, id blandit urna ligula ac nulla. Integer aliquam justo non lectus sodales lobortis. Integer luctus interdum elit sed ornare. Suspendisse dapibus tincidunt odio, hendrerit blandit orci ultricies aliquet. Sed consectetur dui ac urna fermentum, non fringilla felis posuere. Proin erat dolor, ultricies pulvinar interdum lobortis, iaculis vel arcu. Integer tempus eget elit porta ultricies.</p>
                <p>Nunc malesuada, mauris at malesuada dignissim, neque arcu fringilla tortor, nec auctor erat ligula elementum leo. Nunc pulvinar lacus non sollicitudin dictum. Ut vel neque hendrerit, maximus ante eu, cursus leo. Morbi facilisis lectus vel arcu ultricies congue.</p>
                <p>Vestibulum nibh nisl, finibus ut neque non, accumsan congue felis. Vestibulum pellentesque velit pellentesque ex hendrerit consectetur. Vivamus efficitur feugiat malesuada. Nunc vel rutrum eros. Donec tristique dui sed dolor finibus, sit amet elementum nulla tincidunt. Donec malesuada turpis massa.</p>
                <p>Morbi non augue rutrum, aliquam elit sit amet, volutpat libero. Donec non lectus ex. Nam fringilla, quam aliquet consequat consequat, nisl enim porta sapien, nec dapibus erat odio non tellus. Morbi et hendrerit neque. Aenean auctor consequat risus, vel sodales diam tincidunt sodales. Aenean quis ullamcorper neque. Donec quis nulla vitae dui volutpat feugiat. Sed posuere dolor viverra sapien varius interdum nec id nisl.</p>
                <p>Cras facilisis, neque at ullamcorper elementum, erat urna consequat risus, et faucibus enim justo in eros. Mauris eget auctor justo. In porta dui ac nulla vehicula, non ornare diam venenatis. Ut bibendum pretium nibh, at sagittis turpis. Praesent lacinia justo a tincidunt tincidunt. Aliquam pulvinar erat non turpis ultrices, et euismod nibh varius.</p>
                <p>Proin rutrum commodo urna id tempus. Integer at lorem sed purus lobortis semper id a sem. Quisque lacinia convallis vehicula. Nunc sit amet erat sed purus rutrum vestibulum ac ornare sapien. Vivamus vestibulum, justo eget laoreet viverra, urna ligula bibendum mi, id interdum turpis libero non nunc. Fusce vitae leo velit. Fusce dapibus eget purus vitae condimentum. Nulla finibus faucibus leo, eu pellentesque ante vulputate vel.</p>
                <S.BaseButton onClick={changeDayMode}>Switch</S.BaseButton>
            </S.Container>
        </S.TopLevelContainer>
  );
}

export default App;
