<GameFile>
  <PropertyGroup Name="SokobanScene" Type="Scene" ID="1df4e29a-8d7c-4fc3-aa59-a8a3acb57f7c" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Scene" Tag="10" ctype="GameNodeObjectData">
        <Size X="1136.0000" Y="640.0000" />
        <Children>
          <AbstractNodeData Name="scroll_view" ActionTag="-1693850074" Tag="30" IconVisible="False" LeftMargin="133.0682" RightMargin="131.9318" TopMargin="128.9305" BottomMargin="31.0694" TouchEnable="True" ClipAble="True" BackColorAlpha="28" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ScrollDirectionType="Vertical_Horizontal" ctype="ScrollViewObjectData">
            <Size X="871.0000" Y="480.0000" />
            <AnchorPoint ScaleX="-0.1068" ScaleY="-0.0828" />
            <Position X="40.0754" Y="-8.6729" />
            <Scale ScaleX="1.1135" ScaleY="1.1802" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0353" Y="-0.0136" />
            <PreSize X="0.7667" Y="0.7500" />
            <SingleColor A="255" R="255" G="255" B="255" />
            <FirstColor A="255" R="255" G="150" B="100" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
            <InnerNodeSize Width="871" Height="480" />
          </AbstractNodeData>
          <AbstractNodeData Name="atk_icon" ActionTag="697707773" Tag="28" IconVisible="False" LeftMargin="25.8208" RightMargin="1078.1792" TopMargin="128.0092" BottomMargin="479.9908" ctype="SpriteObjectData">
            <Size X="32.0000" Y="32.0000" />
            <AnchorPoint ScaleX="0.5313" ScaleY="0.4375" />
            <Position X="42.8208" Y="493.9908" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0377" Y="0.7719" />
            <PreSize X="0.0282" Y="0.0500" />
            <FileData Type="Normal" Path="atk.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="def_icon" ActionTag="-1398808541" Tag="29" IconVisible="False" LeftMargin="23.0881" RightMargin="1080.9120" TopMargin="207.4103" BottomMargin="400.5897" ctype="SpriteObjectData">
            <Size X="32.0000" Y="32.0000" />
            <AnchorPoint ScaleX="0.6025" ScaleY="0.5252" />
            <Position X="42.3667" Y="417.3976" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0373" Y="0.6522" />
            <PreSize X="0.0282" Y="0.0500" />
            <FileData Type="Normal" Path="def.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="atk_text" ActionTag="-431733315" Tag="36" IconVisible="False" LeftMargin="92.2963" RightMargin="1021.7037" TopMargin="129.4842" BottomMargin="476.5158" FontSize="48" LabelText="7" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="22.0000" Y="34.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="103.2963" Y="493.5158" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0909" Y="0.7711" />
            <PreSize X="0.0194" Y="0.0531" />
            <FontResource Type="Normal" Path="PixelFont.ttf" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="def_text" ActionTag="1206258587" Tag="37" IconVisible="False" LeftMargin="91.8997" RightMargin="1022.1003" TopMargin="206.1950" BottomMargin="399.8050" FontSize="48" LabelText="4" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="22.0000" Y="34.0000" />
            <AnchorPoint ScaleX="0.2295" ScaleY="-0.3744" />
            <Position X="96.9481" Y="387.0747" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0853" Y="0.6048" />
            <PreSize X="0.0194" Y="0.0531" />
            <FontResource Type="Normal" Path="PixelFont.ttf" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="hp_icon" ActionTag="-1438343527" Tag="38" IconVisible="False" LeftMargin="25.7356" RightMargin="1078.2644" TopMargin="57.5992" BottomMargin="550.4008" ctype="SpriteObjectData">
            <Size X="32.0000" Y="32.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="41.7356" Y="566.4008" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0367" Y="0.8850" />
            <PreSize X="0.0282" Y="0.0500" />
            <FileData Type="Normal" Path="hp.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="hp_text" ActionTag="1011344288" Tag="40" IconVisible="False" LeftMargin="88.1480" RightMargin="1014.8520" TopMargin="58.1050" BottomMargin="513.8950" FontSize="48" LabelText="10&#xA;" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="33.0000" Y="68.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="104.6480" Y="547.8950" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0921" Y="0.8561" />
            <PreSize X="0.0290" Y="0.1063" />
            <FontResource Type="Normal" Path="PixelFont.ttf" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>