function UIXProject({thumbnail, name}: UIXProject){
    return(
        <div>
            <div className="cropped-thumbnail">
                <img src={thumbnail}></img>
            </div>
            <p>{name}</p>
        </div>
    )
};

export default UIXProject;